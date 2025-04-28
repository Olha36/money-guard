import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="wrapper">
      {showLogin ? (
        <Login onToggle={() => setShowLogin(false)} />
      ) : (
        <Register onToggle={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;
