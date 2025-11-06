import './Accueil.css';
import Post from './Post';
import './Post.css'
import statut from '../assets/statut.png';

function Accueuil() {
  return (
    <div>
      <h1>Bienvenue  sur votre reseau inter étudiant</h1>
      <section>
        <div className='actualité'>
          <h2><img src={statut} alt="" /> Actualités</h2>
          <button className='actuBtn'>Quoi de neuf?</button>
        </div>
        <Post />
      </section>
    </div>
  );
}

export default Accueuil;