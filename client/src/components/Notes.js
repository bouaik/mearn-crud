import postsStore from "../store/postsStore";
import Note from "./Note";

const Notes = () => {
  const store = postsStore((state) => {
    return { posts: state.posts };
  });
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
