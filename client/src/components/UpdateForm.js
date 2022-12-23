import React from "react";
import postsStore from "../store/postsStore";
const UpdateForm = () => {
  const store = postsStore();
  return (
    <>
      {" "}
      {store.updateForm._id && (
        <div>
          <h2>update note</h2>
          <form onSubmit={store.updatePost}>
            <input
              value={store.updateForm.title}
              name="title"
              placeholder="title"
              onChange={store.handleUpdateFieldChange}
            />
            <textarea
              value={store.updateForm.body}
              name="body"
              placeholder="body"
              onChange={store.handleUpdateFieldChange}
            />
            <input type="submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateForm;
