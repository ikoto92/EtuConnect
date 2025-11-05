import React from "react";
import "../styles/HomePage.css";
import ProfilePhoto from "../components/ProfilePhoto";
import PostCard from "../components/PostCard";

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">MyStudent</h1>
        <nav className="nav">
          <a href="#">Accueil</a>
          <a href="#">Annonces</a>
          <a href="#">Communauté</a>
          <a href="#">Profil</a>
        </nav>
      </header>

      <main className="main">
        <section className="intro">
          <h2>Bienvenue sur CampusLink</h2>
          <p>La plateforme d’échanges entre étudiants.</p>
        </section>

        <ProfilePhoto />

        <section className="news">
          <div className="news-header">
            <h3>🌀 Actualités</h3>
            <input
              type="text"
              placeholder="Quoi de neuf ?"
              className="search-input"
            />
          </div>

          <PostCard
            author="André"
            time="2 h"
            content="Bienvenue à tous sur la plateforme CampusLink ! Partagez vos projets et vos idées 🎓"
          />
          <PostCard
            author="Sarah"
            time="4 h"
            content="Quelqu’un connaît un bon plan logement près du campus ? 🏡"
          />
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 CampusLink — Projet étudiant</p>
      </footer>
    </div>
  );
};

export default HomePage;
