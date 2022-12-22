import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [createForm, setCreateForm] = useState({ title: "", body: '' });

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/posts");
    setPosts(res.data.posts);
  };

  const updateCreateForm = (e) => {
    const { name, value } = e.target
    setCreateForm({ ...createForm, [name]: value })
  }

  const createPost = async (e) => {
    e.preventDefault()


    const res = await axios.post("http://localhost:3000/posts", createForm);

    setPosts([...posts, res.data.post])

    setCreateForm({ title: "", body: '' })
  }


  const deletePost = async (_id) => {
    await axios.delete(`http://localhost:3000/posts/${_id}`);

    const newPosts = posts.filter(post => post._id !== _id)
    setPosts(newPosts)
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Notes : </h1>

        {posts &&
          posts.map((post) => {
            return (
              <div key={post._id}>
                <h3>{post.title}</h3>
                <button onClick={() => deletePost(post._id)}>Delete</button>
              </div>
            );
          })}
      </div>

      {/* Create note */}
      <div>
        <h2>Create note</h2>
        <form onSubmit={createPost}>
          <input value={createForm.title} name='title' placeholder="title" onChange={updateCreateForm} />
          <textarea value={createForm.body} name="body" placeholder="body" onChange={updateCreateForm} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
