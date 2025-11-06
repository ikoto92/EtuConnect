import { useState } from "react";
import "./Post.css";
import profilPic from "../assets/magician-8763894_1280.png";
import liker from "../assets/like.png";
import comment from "../assets/comment.png";
import share from "../assets/share.png";

function Post({
  username = "@utilisateur",
  timeAgo = "Il y a 2h",
  content = "Ceci est un post d'exemple sur le réseau inter étudiant."
}) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  function handleLike() {
    setLikes((prev) => prev + 1);
  }

  function handleToggleComments() {
    setShowComments((prev) => !prev);
  }

  function handleAddComment(e) {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments((prev) => [...prev, newComment.trim()]);
    setNewComment("");
  }

  function handleShare() {
    alert("Post partagé !");
  }

  return (
    <div className="card">
      <div className="user">
        <img src={profilPic} alt="" />
        <div>
          <span>{username}</span>
          <br />
          <small>{timeAgo}</small>
        </div>
      </div>

      <span className="textContent">{content}</span>

      <ul>
        <li onClick={handleLike} title="J'aime">
          <img src={liker} alt="Like" /> <span>{likes}</span>
        </li>
        <li onClick={handleToggleComments} title="Commenter">
          <img src={comment} alt="Commenter" /> <span>{comments.length}</span>
        </li>
        <li onClick={handleShare} title="Partager">
          <img src={share} alt="Partager" />
        </li>
      </ul>

      {showComments && (
        <div className="comments-section">
          <form onSubmit={handleAddComment}>
            <input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Écris un commentaire..."
            />
            <button type="submit">Envoyer</button>
          </form>

          <div className="comment-list">
            {comments.map((c, i) => (
              <p key={i}>{c}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
