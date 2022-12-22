// import dependencies 
const express = require("express")
const cors = require("cors")
const connectToDb = require('./config/database')
const postController = require("./controllers/postController")



// Load env variables
if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}

// Connect to database
connectToDb()


const app = express()
// Configure express app
app.use(express.json())
app.use(cors())


// Routing
app.get("/posts", postController.fetchPosts)

app.post("/posts", postController.createPost)


app.get("/posts/:id", postController.fetchPost)


app.put("/posts/:id", postController.updatePost)


app.delete("/posts/:id", postController.deletePost)



// start server
app.listen(process.env.PORT)