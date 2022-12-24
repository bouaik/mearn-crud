import React from "react";
import postsStore from "../store/postsStore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MyModal from "./MyModal";

const UpdateForm = () => {
  const store = postsStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await store.updatePost();

    store.handleClose();
  };
  return (
    <>
      {store.updateForm._id && (
        <div>
          <MyModal open={store.isModalOpen} onClose={store.handleClose}>
            <h2>update post</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={store.updateForm.title}
                name="title"
                onChange={store.handleUpdateFieldChange}
              />

              <TextField
                id="outlined-multiline-static"
                label="Body"
                multiline
                rows={4}
                value={store.updateForm.body}
                name="body"
                onChange={store.handleUpdateFieldChange}
              />

              <Button type="submit" variant="contained">
                Update
              </Button>
            </form>
          </MyModal>
        </div>
      )}
    </>
  );
};

export default UpdateForm;
