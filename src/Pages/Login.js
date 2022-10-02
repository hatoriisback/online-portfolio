import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    localStorage.setItem("token", "login");
    navigate(from, { replace: true });
  };

  return (
    <div className="login-page" style={{textAlign: "center", margin: "30%"}}>
      <h1>LOGIN PAGE</h1>
      <div className="loginpage-content">
        <p>Click Button to Login!</p>
        <button
          className="login-button"
          onClick={() => {
            return handleLogin();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
