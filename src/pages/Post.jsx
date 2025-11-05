import './Post.css';
import profilPic from '../assets/magician-8763894_1280.png';
import liker from '../assets/like.png';
import comment from '../assets/comment.png';
import share from '../assets/share.png';
function Post() {
  return (
    <div className="card">
      <div className="user">
        <img src={profilPic} alt="" />
        <p>Utilisateur</p>
      </div>
      <p>Ceci est un post d'exemple sur le reseau inter étudiant.</p>
      <ul className="iconeScocialNetwork">
        <li><img src={liker} alt="" /></li>
        <li><img src={comment} alt="" /></li>
        <li><img src={share} alt="" /></li>
      </ul>
    </div>
  );
}

export default Post;