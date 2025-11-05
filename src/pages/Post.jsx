import './Post.css';
import profilPic from '../assets/magician-8763894_1280.png';
import liker from '../assets/like.png';
import comment from '../assets/comment.png';
import share from '../assets/share.png';

function Post({ username = "@utilisateur", timeAgo = "Il y a 2h", content = "Ceci est un post d'exemple sur le reseau inter étudiant." }) {
  return (
    <div className="card">
      <div className="user">
        <img src={profilPic} alt="" />
        <span>{username}</span><br />
        <span>{timeAgo}</span>
      </div>
      <span className='textContent'>{content}</span>
      <ul>
        <li><img src={liker} alt="" /></li>
        <li><img src={comment} alt="" /></li>
        <li><img src={share} alt="" /></li>
      </ul>
    </div>
  );
}

export default Post;