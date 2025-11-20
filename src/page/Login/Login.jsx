import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaArrowLeft } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const mode = searchParams.get('mode');
    if (mode === 'signup') {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/onboarding');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/onboarding');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFacebookAuth = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/onboarding');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <button className="back-btn" onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to dashboard
        </button>
        
        <div className="auth-form">
          <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
          <p className="auth-subtitle">
            {isLogin ? 'Enter your email & password to sign in!' : 'Enter your email & password to sign up!'}
          </p>

          <div className="social-buttons">
            <button className="social-btn google-btn" onClick={handleGoogleAuth}>
              <FaGoogle /> {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
            </button>
            <button className="social-btn facebook-btn" onClick={handleFacebookAuth}>
              <FaFacebook /> {isLogin ? 'Sign in with Facebook' : 'Sign up with Facebook'}
            </button>
          </div>

          <div className="divider">
            <span>Or</span>
          </div>

          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="name-row">
                <div className="form-group">
                  <label>First Name*</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name*</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}
            
            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Password*</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {isLogin && (
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" /> Keep me logged in
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>
            )}

            {!isLogin && (
              <div className="terms">
                <p>By creating an account means you agree to the <a href="#">Terms and Conditions</a>, and our <a href="#">Privacy Policy</a></p>
              </div>
            )}
            
            <button type="submit" className="auth-submit-btn">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
          
          <p className="toggle-text">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              className="toggle-link"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
      
      <div className="auth-right">
        <div className="brand-section">
          <div className="shoe-image">
            <img src="/images/shoe1.jpg" alt="Athletic Shoe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;