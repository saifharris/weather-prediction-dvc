import React, { useState } from 'react';
import { login } from '../api';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(formData);
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>
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
        <button type="submit">Login</button>
      </form>
      <p className="switch-link" onClick={() => navigate('/signup')}>
        Don't have an account? Signup
      </p>
    </div>
  );
};

export default Login;
