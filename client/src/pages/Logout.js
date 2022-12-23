import React, { useEffect } from "react";
import authStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const store = authStore();

  const navigate = useNavigate();

  useEffect(() => {
    store.logout();

    navigate("/login");
  }, []);
  return <div>You are logged out</div>;
};

export default Logout;
