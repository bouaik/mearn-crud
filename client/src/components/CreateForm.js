import React from "react";
import postsStore from "../store/postsStore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MyModal from "./MyModal";

const CreateForm = () => {
  const store = postsStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await store.createPost();

    store.handleClose();
  };
  return (
    <>
      {!store.updateForm._id && (
        <>
          <Button onClick={store.handleOpen}>Create post</Button>
          <MyModal open={store.isModalOpen} onClose={store.handleClose}>
            <h2>Create post</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={store.createForm.title}
                name="title"
                onChange={store.updateCreateForm}
              />
              <TextField
                id="outlined-multiline-static"
                label="Body"
                multiline
                rows={4}
                value={store.createForm.body}
                name="body"
                onChange={store.updateCreateForm}
              />

              <Button type="submit" variant="contained">
                Create
              </Button>
            </form>
          </MyModal>
        </>
      )}
    </>
  );
};

export default CreateForm;
