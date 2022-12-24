import React from "react";
import postsStore from "../store/postsStore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
          <Modal
            open={store.isModalOpen}
            onClose={store.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>
                <h2>Create note</h2>
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
              </div>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

export default CreateForm;
