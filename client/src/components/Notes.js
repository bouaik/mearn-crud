import postsStore from "../store/postsStore";
import Note from "./Note";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Notes = () => {
  const store = postsStore((state) => {
    return { posts: state.posts, isLoading: state.isLoading };
  });

  if (store.isLoading)
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  return (
    <div>
      <h1>Notes : </h1>

      {store.posts &&
        store.posts.map((post) => {
          return <Note key={post._id} post={post} />;
        })}
    </div>
  );
};

export default Notes;
