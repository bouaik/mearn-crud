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

app.get("/check-auth", requireAuth, usersController.checkAuth);

app.post("/logout", usersController.logout);

app.get("/posts", postController.fetchPosts);

app.post("/posts", postController.createPost);

app.get("/posts/:id", postController.fetchPost);

app.put("/posts/:id", postController.updatePost);

app.delete("/posts/:id", postController.deletePost);

// start server
app.listen(process.env.PORT);
