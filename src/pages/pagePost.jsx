import { useState } from "react";
import Post from "./Post";
import './pagePost.css';

function PagePost() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "@etudiant1",
      timeAgo: "Il y a 2h",
      content: "Ceci est un post d'exemple sur le reseau inter étudiant."
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [newContent, setNewContent] = useState("");

  function handleAddClick() {
    setShowForm(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newContent.trim()) return;

    const newPost = {
      id: Date.now(),
      username: newUser.trim(),
      timeAgo: "À l'instant",
      content: newContent.trim()
    };

    setPosts((p) => [newPost, ...p]);
    setNewUser("");
    setNewContent("");
    setShowForm(false);
  }

  return (
    <div>
      <h2>Posts</h2>
      <p>Bienvenue sur la page des posts !</p>

      <div>
        {!showForm && (
          <button className="addPostBtn" onClick={handleAddClick}>Ajouter un post</button>
        )}

        {showForm && (
          <form className="form" onSubmit={handleSubmit} style={{ marginTop: 8 }}>
            <div className="nomUser">
              <label>
                Nom d'utilisateur :{' '}
                <input
                  value={newUser}
                  onChange={(e) => setNewUser(e.target.value)}
                  placeholder="@votrePseudo"
                />
              </label>
            </div>
            <div className="contenu">
              <label>
                Contenu :{' '}
                <textarea
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="ecris ton post ici"
                />
              </label>
            </div>
            <div className="btn">
              <button className="addFormBtn" type="submit">Publier</button>{' '}
              <button className="addFormBtn" type="button" onClick={() => setShowForm(false)}>
                Annuler
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="posts-container">
        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            timeAgo={post.timeAgo}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
}

export default PagePost;