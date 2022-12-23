import React from "react";
import postsStore from "../store/postsStore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CreateForm = () => {
  const store = postsStore();
  return (
    <>
      {!store.updateForm._id && (
        <div>
          <h2>Create note</h2>
          <form onSubmit={store.createPost}>
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
        </div>
      )}
    </>
  );
};

export default CreateForm;
