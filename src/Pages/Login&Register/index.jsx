import React, { useEffect, useState } from "react";
import "./index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import api from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/features/userSlice";
import { toast } from "react-toastify";
import { login, userLoginSlice } from "../../redux/features/userLoginSlice";
const Index = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues.data);
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    const isValid = passwordRegex.test(value);
    setIsPasswordValid(isValid);
    setPasswordError(
      isValid
        ? ""
        : "Password must contain at least one uppercase letter and one special character."
    );
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("Please fill in all information!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password not match!");
    } else if (!isPasswordValid) {
      toast.error(passwordError);
    } else {
      dispatch(register({ email: email, password: password }));
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate(`/createaccount`);
    }
  };

  const Login = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/user/v1/login", {
        email: emailLogin,
        password: passwordLogin,
      });
      toast.success("Đăng nhập thành công!");
      console.log(res.data.data);
      localStorage.setItem("token", res.data.data.accessToken);
      localStorage.setItem("userId", res.data.data.userId);
      dispatch(login(res.data.data));

      if (res.data.data.role.includes("ADMIN")) {
        navigate("/dashboard");
      } else if (res.data.data.role.includes("USER")) {
        navigate("/matching");
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/matching"); // Nếu có token, điều hướng đến trang matching
    }
  }, [navigate]);

  return (
    <div className={`auth-container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="auth-forms-container">
        <div className="auth-signin-signup">
          <form
            action="#"
            className="auth-sign-in-form"
            onSubmit={Login}
            onChange={handleSubmit}
          >
            <div
              className="flex gap-2 items-center mb-3 mr-auto lg:mr-64 w-full lg:w-auto"
              onClick={() => navigate(`/home`)}
            >
              <IoArrowBackCircleOutline className="text-xl lg:text-2xl" />
              <button className="text-sm lg:text-base">Back Home</button>
            </div>
            <h2 className="auth-title">Sign in</h2>
            <div className="auth-input-field">
              <i className="fas fa-user"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
              />
            </div>
            <div className="auth-input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={passwordLogin}
                onChange={(e) => setPasswordLogin(e.target.value)}
              />
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
          <form
            action="#"
            className="auth-sign-up-form"
            onSubmit={handleSignUpSubmit}
          >
            <div
              className="flex gap-2 items-center mb-3 mr-auto lg:mr-64 w-full lg:w-auto"
              onClick={() => navigate(`/home`)}
            >
              <IoArrowBackCircleOutline className="text-xl lg:text-2xl" />
              <button className="text-sm lg:text-base">Back Home</button>
            </div>
            <h2 className="auth-title">Sign up</h2>
            <div className="auth-input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="auth-input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="auth-input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
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
