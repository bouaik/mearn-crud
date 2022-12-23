import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import authStore from "../store/authStore";

const Login = () => {
  const store = authStore();

  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, []);

  if (store.loggedIn === null) return <div>Loading...</div>;

  if (store.loggedIn) return <Navigate to="/" />;

  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
