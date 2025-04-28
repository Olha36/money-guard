import logo from "../assets/logo-login.png";
import login from "../assets/login-icon.png";
import password from "../assets/password.png";
import userName from "../assets/user-icon.png";

export default function Register({ onToggle }) {
  return (
    <div className="login-container">
      <div className="login-container__logo">
        <img src={logo} alt="login logo" />
        <h2>Money Guard</h2>
      </div>

      <div className="login-container__loginization">
        <form action="#" className="login-container__form">
          <div className="login-container__input-group">
            <img src={userName} alt="user icon" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="login-container__input-group">
            <img src={login} alt="login" />
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="login-container__input-group">
            <img src={password} alt="password" />
            <input
              type="password"
              placeholder="Password"
              className="login-container__password"
            />
          </div>

          <div className="login-container__input-group">
            <img src={password} alt="password" />
            <input
              type="password"
              placeholder="Confirm password"
              className="login-container__password"
            />
          </div>
       
        </form>
      </div>

      <div className="login-container__button-group">
        <button className="register">Register</button>
        <button className="login" onClick={onToggle}>
          Log in
        </button>
      </div>
    </div>
  );
}
