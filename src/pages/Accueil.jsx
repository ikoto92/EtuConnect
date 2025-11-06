import { useNavigate } from "react-router-dom";
import './Accueil.css';
import Post from './Post';
import './Post.css';
import statut from '../assets/statut.png';

function Accueuil() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/pagePost"); 
  }

  return (
    <div>
      <h1>Bienvenue sur votre réseau inter étudiant</h1>
      <section>
        <div className='actualité'>
          <h2><img src={statut} alt="" /> Actualités</h2>
          <button className='actuBtn' onClick={handleClick}>Quoi de neuf ?</button>
        </div>
        <Post />
        <Post />
      </section>
    </div>
  );
}

export default Accueuil;
