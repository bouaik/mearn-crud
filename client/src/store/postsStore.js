import create from "zustand";
import axios from "axios";

const postsStore = create((set) => ({
  isModalOpen: false,
  isLoading: false,
  posts: null,
  createForm: { title: "", body: "" },
  updateForm: { title: "", body: "", _id: null },

  handleOpen: () => {
    set({
      isModalOpen: true,
    });
  },

  handleClose: () => {
    set({
      isModalOpen: false,
    });
  },

  fetchPosts: async () => {
    set({
      isLoading: true,
    });

    const res = await axios.get("/posts");
    // set the state
    set({
      posts: res.data.posts,
      isLoading: false,
    });
  },

  updateCreateForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createPost: async () => {
    const { createForm, posts } = postsStore.getState();

    const res = await axios.post("/posts", createForm);

    set({
      posts: [...posts, res.data.post],
      createForm: { title: "", body: "" },
    });
  },

  deletePost: async (_id) => {
    await axios.delete(`/posts/${_id}`);
    const { posts } = postsStore.getState();

    const newPosts = posts.filter((post) => post._id !== _id);
    set({
      posts: newPosts,
    });
  },

  handleUpdateFieldChange: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: ({ title, body, _id }) => {
    set({
      updateForm: {
        title,
        body,
        _id,
      },
      isModalOpen: true,
    });
  },

  updatePost: async () => {
    const {
      updateForm: { title, body, _id },
      posts,
    } = postsStore.getState();

    const res = await axios.put(`/posts/${_id}`, {
      title,
      body,
    });

    const postIndex = posts.findIndex((post) => post._id === _id);

    posts[postIndex] = res.data.post;

    set({
      posts: posts,
      updateForm: { title: "", body: "", _id: null },
    });
  },
}));

export default postsStore;
