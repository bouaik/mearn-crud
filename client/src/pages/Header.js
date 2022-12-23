import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import authStore from "../store/authStore";

export default function Header() {
  const store = authStore((state) => {
    return { loggedIn: state.loggedIn };
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
              Home
            </Link>
          </Typography>
          {!store.loggedIn && (
            <>
              {" "}
              <Button color="inherit">
                <Link
                  style={{ color: "#fff", textDecoration: "none" }}
                  to="/login"
                >
                  Login
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  style={{ color: "#fff", textDecoration: "none" }}
                  to="/signup"
                >
                  Signup
                </Link>
              </Button>
            </>
          )}
          {store.loggedIn && (
            <Button>
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/logout"
              >
                Logout
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
