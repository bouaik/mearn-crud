import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import authStore from "../store/authStore";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const RequireAuth = (props) => {
  const store = authStore();

  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, []);

  if (store.loggedIn === null)
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );

  if (store.loggedIn === false) return <Navigate to="/login" />;

  return <div>{props.children}</div>;
};

export default RequireAuth;
