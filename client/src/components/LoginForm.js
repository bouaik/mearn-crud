import { useNavigate } from "react-router-dom";
import authStore from "../store/authStore";

const LoginForm = () => {
  const store = authStore();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await store.login();

    navigate("/");
  };
  return (
    <form onSubmit={handleLogin}>
      <input
        value={store.loginForm.email}
        type="email"
        name="email"
        placeholder="Email"
        onChange={store.updateLoginForm}
      />
      <input
        value={store.loginForm.password}
        type="password"
        name="password"
        placeholder="Password"
        onChange={store.updateLoginForm}
      />
      <input type="submit" />
    </form>
  );
};

export default LoginForm;
