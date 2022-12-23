const Post = require("../models/post");

const fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user._id });

    res.json({ posts: posts });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;

    const post = await Post.create({ title, body, user: req.user._id });
    res.json({ post: post });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const fetchPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ _id: id, user: req.user._id });

    res.json({ post: post });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, body } = req.body;

    const { id } = req.params;
    await Post.findByIdAndUpdate(id, { title, body });
    const post = await Post.findOne({ _id: id, user: req.user._id });
    res.json({ post: post });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.deleteOne({ _id: id, user: req.user._id });

    res.json({ message: "Deleted successfuly" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

module.exports = { fetchPosts, createPost, fetchPost, updatePost, deletePost };
