import { useEffect } from "react";
import postsStore from "../store/postsStore";
import CreateForm from "./CreateForm";
import Notes from "./Notes";
import UpdateForm from "./UpdateForm";

function App() {
  const store = postsStore();

  useEffect(() => {
    store.fetchPosts();
  }, [store]);

  return (
    <div className="App">
      <Notes />
      <UpdateForm />
      <CreateForm />
    </div>
  );
}

export default App;
