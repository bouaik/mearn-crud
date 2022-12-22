const Post = require('../models/post')

const fetchPosts = async (req, res) => {
    const posts = await Post.find()

    res.json({ post: posts })

}


const createPost = async (req, res) => {
    const { title, body } = req.body

    const post = await Post.create({ title, body })
    res.json({ post: post })

}

const fetchPost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id)

    res.json({ post: post })

}

const updatePost = async (req, res) => {
    const { title, body } = req.body

    const { id } = req.params
    await Post.findByIdAndUpdate(id, { title, body })
    const post = await Post.findById(id)
    res.json({ post: post })

}


const deletePost = async (req, res) => {
    const { id } = req.params
    await Post.deleteOne({ id })

    res.json({ message: "Deleted successfuly" })

}

module.exports = { fetchPosts, createPost, fetchPost, updatePost, deletePost }