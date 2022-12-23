import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import postsStore from "../store/postsStore";

const NotesPages = () => {
  const store = postsStore();

  useEffect(() => {
    store.fetchPosts();
  }, []);
  return (
    <>
      <Notes />
      <UpdateForm />
      <CreateForm />
    </>
  );
};

export default NotesPages;
