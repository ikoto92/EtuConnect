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
        <div>
          <span>@utilisateur</span><br />
          <span className='time'>Il y a 2h</span>
        </div>
      </div>
      <span className='textContent'>Ceci est un post d'exemple sur le reseau inter étudiant.</span>
      <ul>
        <li><img src={liker} alt="" /></li>
        <li><img src={comment} alt="" /></li>
        <li><img src={share} alt="" /></li>
      </ul>
    </div>
  );
}

export default Post;