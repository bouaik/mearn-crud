import React from "react";
import postsStore from "../store/postsStore";

const CreateForm = () => {
  const store = postsStore();
  return (
    <>
      {!store.updateForm._id && (
        <div>
          <h2>Create note</h2>
          <form onSubmit={store.createPost}>
            <input
              value={store.createForm.title}
              name="title"
              placeholder="title"
              onChange={store.updateCreateForm}
            />
            <textarea
              value={store.createForm.body}
              name="body"
              placeholder="body"
              onChange={store.updateCreateForm}
            />
            <input type="submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default CreateForm;
