import LOGO from './img/logo.png';

import './css/style.css';
import './css/login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const container = {
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor: '#52aa5ed6',
  columnGap: '30px',
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <>
      <section style={container} className={`container forms ${isSignup ? 'show-signup' : ''}`}>
        {/* Login Form */}
        <div className="form login">
          <div className="form-content">
            <div className="logo" style={{ textAlign: 'center', marginBottom: '50px' }}>
            
            <Link to='/'>
              <a href="">
                <img style={{ width: '150px' }} src={LOGO} alt="" />
              </a>
            </Link>

            </div>
            <header>Login</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="field input-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="password"
                />
                <i
                  className={`bx ${showPassword ? 'bx-show' : 'bx-hide'} eye-icon`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
              <div className="form-link">
                <a href="#" className="forgot-pass">Forgot password?</a>
              </div>
              <div className="field button-field">
                <button>Login</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Don't have an account?{' '}
                <a href="#" className="link signup-link" onClick={toggleForm}>
                  Signup
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <div className="form signup">
          <div className="form-content">
            <div className="logo" style={{ textAlign: 'center', marginBottom: '50px' }}>

            <Link to='/'>
              <a href="">
                <img style={{ width: '150px' }} src={LOGO} alt="" />
              </a>
            </Link>  

            </div>
            <header>Signup</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="field input-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create password"
                  className="password"
                />
              </div>
              <div className="field input-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm password"
                  className="password"
                />
                <i
                  className={`bx ${showPassword ? 'bx-show' : 'bx-hide'} eye-icon`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
              <div className="field button-field">
                <button>Signup</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Already have an account?{' '}
                <a href="#" className="link login-link" onClick={toggleForm}>
                  Login
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;