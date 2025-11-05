import React from "react";
import "../styles/HomePage.css"; // ou ../styles/Annonces.css si tu veux séparer

const AnnonceCard = ({ annonce, isFavorite, onToggleFavorite }) => {
  const { id, title, description, category, city, date, authorPhoto, authorName } = annonce;

  return (
    <article className="annonce-card">
      <header className="annonce-header">
        <img src={authorPhoto || "https://i.pravatar.cc/50"} alt={authorName} className="avatar" />
        <div className="annonce-meta">
          <div className="annonce-author">{authorName || "Anonyme"}</div>
          <div className="annonce-time">{date}</div>
        </div>
        <button
          className={`fav-btn ${isFavorite ? "fav-active" : ""}`}
          onClick={() => onToggleFavorite(id)}
          aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          ❤️
        </button>
      </header>

      <h4 className="annonce-title">{title}</h4>
      <p className="annonce-desc">{description}</p>

      <footer className="annonce-footer">
        <span className="annonce-cat">{category}</span>
        <span className="annonce-city">{city}</span>
      </footer>
    </article>
  );
};

export default AnnonceCard;
