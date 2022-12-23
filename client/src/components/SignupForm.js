import { useNavigate } from "react-router-dom";
import authStore from "../store/authStore";

const LoginForm = () => {
  const store = authStore();

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    await store.signup();

    navigate("/login");
  };
  return (
    <form onSubmit={handleSignup}>
      <input
        value={store.signupForm.email}
        type="email"
        name="email"
        placeholder="Email"
        onChange={store.updateSignupForm}
      />
      <input
        value={store.signupForm.password}
        type="password"
        name="password"
        placeholder="Password"
        onChange={store.updateSignupForm}
      />
      <input type="submit" />
    </form>
  );
};

export default LoginForm;
