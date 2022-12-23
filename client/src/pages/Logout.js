import React, { useEffect } from "react";
import authStore from "../store/authStore";

const Logout = () => {
  const store = authStore();

  useEffect(() => {
    store.logout();
  }, []);
  return <div>You are logged out</div>;
};

export default Logout;
