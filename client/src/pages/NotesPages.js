import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import postsStore from "../store/postsStore";
import Grid from "@mui/material/Grid";

const NotesPages = () => {
  const store = postsStore();

  useEffect(() => {
    store.fetchPosts();
  }, []);
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <UpdateForm />
          <CreateForm />
          <Notes />
        </Grid>
      </Grid>
    </>
  );
};

export default NotesPages;
