import React, { useState } from 'react';
import { signup } from '../api';
import { useNavigate } from 'react-router-dom';
import './styles/Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signup(formData);
      alert(data.message);
      navigate('/');
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-header">Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Signup</button>
      </form>
      <p className="switch-link" onClick={() => navigate('/login')}>
        Already have an account? Login
      </p>
    </div>
  );
};

export default Signup;
