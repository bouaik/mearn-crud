import { useNavigate } from "react-router-dom";
import authStore from "../store/authStore";
import styled from "@emotion/styled";

const InputSubmit = styled.input`
  padding: 10px;
  background-color: hotpink;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const LoginForm = () => {
  const store = authStore();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await store.login();

    navigate("/");
  };
  return (
    <>
      {store.isError && <div>Invalid Email or password</div>}
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
        <InputSubmit type="submit" />
      </form>
    </>
  );
};

export default LoginForm;
