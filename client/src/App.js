import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [createForm, setCreateForm] = useState({ title: "", body: '' });
  const [updateForm, setUpdateForm] = useState({ _id: null, title: "", body: '' });

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/posts");
    setPosts(res.data.posts);
  };

  const updateCreateForm = (e) => {
    const { name, value } = e.target
    setCreateForm({ ...createForm, [name]: value })
  }


  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target
    setUpdateForm({ ...updateForm, [name]: value })
  }

  const toggleUpdate = (post) => {
    setUpdateForm({ title: post.title, body: post.body, _id: post._id })
  }

  const createPost = async (e) => {
    e.preventDefault()


    const res = await axios.post("http://localhost:3000/posts", createForm);

    setPosts([...posts, res.data.post])

    setCreateForm({ title: "", body: '' })
  }

  const updatePost = async (e) => {
    e.preventDefault()


    const res = await axios.put(`http://localhost:3000/posts/${updateForm._id}`, updateForm);
    const postIndex = posts.findIndex(post => post._id === updateForm._id)

    posts[postIndex] = res.data.post

    setPosts(posts)

    setUpdateForm({ title: "", body: '', _id: null })
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
                <button onClick={() => toggleUpdate(post)}>Update</button>
                <button onClick={() => deletePost(post._id)}>Delete</button>
              </div>
            );
          })}
      </div>

      {/* update post */}

      {updateForm._id && <div>
        <h2>update note</h2>
        <form onSubmit={updatePost}>
          <input value={updateForm.title} name='title' placeholder="title" onChange={handleUpdateFieldChange} />
          <textarea value={updateForm.body} name="body" placeholder="body" onChange={handleUpdateFieldChange} />
          <input type="submit" />
        </form>
      </div>}

      {/* Create post */}
      {!updateForm._id && <div>
        <h2>Create note</h2>
        <form onSubmit={createPost}>
          <input value={createForm.title} name='title' placeholder="title" onChange={updateCreateForm} />
          <textarea value={createForm.body} name="body" placeholder="body" onChange={updateCreateForm} />
          <input type="submit" />
        </form>
      </div>}
    </div>
  );
}

export default App;
