import React from "react";
import postsStore from "../store/postsStore";

const Note = ({ post }) => {
  const store = postsStore((state) => {
    return {
      toggleUpdate: state.toggleUpdate,
      deletePost: state.deletePost,
    };
  });
  return (
    <div key={post._id}>
      <h3>{post.title}</h3>
      <button onClick={() => store.toggleUpdate(post)}>Update</button>
      <button onClick={() => store.deletePost(post._id)}>Delete</button>
    </div>
  );
};

export default Note;
