// import dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/database");
const postController = require("./controllers/postController");
const usersController = require("./controllers/usersController");
const requireAuth = require("./middleware/requireAuth");

// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Connect to database
connectToDb();

const app = express();
// Configure express app
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

// Routing
app.post("/signup", usersController.signup);

app.post("/login", usersController.login);

app.get("/logout", usersController.logout);

app.get("/check-auth", requireAuth, usersController.checkAuth);

app.get("/posts", requireAuth, postController.fetchPosts);

app.post("/posts", requireAuth, postController.createPost);

app.get("/posts/:id", requireAuth, postController.fetchPost);

app.put("/posts/:id", requireAuth, postController.updatePost);

app.delete("/posts/:id", requireAuth, postController.deletePost);

// start server
app.listen(process.env.PORT);
