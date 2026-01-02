import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaWandMagicSparkles } from 'react-icons/fa6';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // React Router v5 hook for navigation
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Yahan validation logic aa sakta hai
    console.log("Logging in with:", email);
    
    // Redirecting to dashboard (SPA behavior)
    history.push('/dashboard');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      
      <div className="header-section">
        <div className="logo-container">
          <FaWandMagicSparkles />
        </div>
        <h1>Welcome Back</h1>
        <p className="subtitle">Sign in to continue to TextFlow</p>
      </div>

     
      <div className="login-card">
        <form onSubmit={handleLogin}>
          
        
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <FaEnvelope className="input-icon left" />
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <FaLock className="input-icon left" />
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              <div 
                className="input-icon right-clickable" 
                onClick={togglePasswordVisibility}
                role="button"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <a href="/forgot-password" title="Reset your password" className="link-forgot">
            Forgot Password?
          </a>

          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>

        <div className="divider">
          <span>Or</span>
        </div>

        <div className="footer-action">
          Don't have an account? <a href="/register">Create new account</a>
        </div>
      </div>

      <div className="legal-text">
        By signing in, you agree to our Terms of Service and Privacy Policy
      </div>
    </div>
  );
};

export default LoginPage;