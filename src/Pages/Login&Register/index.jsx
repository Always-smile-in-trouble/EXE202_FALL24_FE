import React, { useState } from "react";
import "./index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const Index = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`auth-container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="auth-forms-container">
        <div className="auth-signin-signup">
          <form action="#" className="auth-sign-in-form">
            <div
              className="flex gap-2 items-center mb-3 mr-64"
              onClick={() => navigate(`/`)}
            >
              <IoArrowBackCircleOutline />
              <button>Back Home</button>
            </div>
            <h2 className="auth-title">Sign in</h2>
            <div className="auth-input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="auth-input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="auth-btn solid" />
            <p className="auth-social-text">Or Sign in with social platforms</p>
            <div className="auth-social-media">
              <a href="#" className="auth-social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="auth-social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="auth-social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="auth-social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="auth-sign-up-form">
            <div
              className="flex gap-2 items-center mb-3 mr-64"
              onClick={() => navigate(`/`)}
            >
              <IoArrowBackCircleOutline />
              <button>Back Home</button>
            </div>
            <h2 className="auth-title">Sign up</h2>
            <div className="auth-input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="auth-input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="auth-input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="auth-btn" value="Sign up" />
            <p className="auth-social-text">Or Sign up with social platforms</p>
            <div className="auth-social-media">
              <a href="#" className="auth-social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="auth-social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="auth-social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="auth-social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="auth-panels-container">
        <div className="auth-panel left-panel">
          <div className="auth-content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="auth-btn transparent"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2021/06/01/illustration-cartoon-badminton-player-Graphics-12777778-1-1-580x386.png"
            className="auth-image mb-12"
            alt="Log"
          />
        </div>
        <div className="auth-panel right-panel">
          <div className="auth-content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="auth-btn transparent"
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/badminton-illustration-download-in-svg-png-gif-file-formats--player-racket-hobbies-pack-sports-games-illustrations-1753871.png"
            className="auth-image"
            alt="Register"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
