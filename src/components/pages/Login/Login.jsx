import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: auth API
    console.log({ email, password });
    navigate("/home"); // go to home after login
  };

  const handleSkip = () => {
    navigate("/home"); // skip login
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>

        {/* SKIP BUTTON */}
        <button
          type="button"
          className="skip-btn"
          onClick={handleSkip}
        >
          Skip for now
        </button>

        <p className="login-help">
          New to OTT? <span>Sign Up</span>
        </p>
      </form>
    </div>
  );
  
}

export default Login;
