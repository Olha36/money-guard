import logo from "../assets/logo-login.png";
import login from "../assets/login-icon.png";
import password from "../assets/password.png";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-container__logo">
        <img src={logo} alt="login logo" />
        <h2>Money Guard</h2>
      </div>

      <div className="login-container__loginization">
        <img src={login} alt="login" />
        <input type="email" placeholder="E-mail" />
        <img src={password} alt="password" />
        <input
          type="password"
          placeholder="Password"
          className="login-container__password"
        />
      </div>

      <div className="login-container__button-group">
        <button className="login">Log in</button>
        <button className="register">Register</button>
      </div>
    </div>
  );
}
