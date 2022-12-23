import React from "react";
import postsStore from "../store/postsStore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const UpdateForm = () => {
  const store = postsStore();
  return (
    <>
      {" "}
      {store.updateForm._id && (
        <div>
          <h2>update note</h2>
          <form onSubmit={store.updatePost}>
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
        </div>
      )}
    </>
  );
};

export default UpdateForm;
