import './Header.css';
import imgPost from './assets/telegramme.png';
import imgCommunaute from './assets/grouper.png';
import profilImg from './assets/utilisateur.png';
import accueil from './assets/accueil.png';

function Header() {
  return (
    <header>
      <h1>MyStudent</h1>
      <nav className='navBar'>
        <ul>
          <li><a href="#"><img src={accueil} alt="" /><p>Accueil</p></a></li>
          <li><a href="#"><img src={imgPost} alt="Post" /><p>Post</p></a></li>
          <li><a href="#"><img src={imgCommunaute} alt="Communauté" /><p>Communauté</p></a></li>
          <li><a href="#"><img src={profilImg} alt="Profil" /><p>Profil</p></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
