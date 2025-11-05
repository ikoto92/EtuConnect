import React, { useEffect, useMemo, useState } from "react";
import AnnonceCard from "../components/AnnonceCard";
import "../styles/HomePage.css"; 

const LOCAL_KEY = "campuslink_annonces";
const FAVORITES_KEY = "campuslink_favs";

const Annonces = () => {
  const [annonces, setAnnonces] = useState([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("Tous");
  const [sort, setSort] = useState("recent"); // recent | title
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    } catch {
      return [];
    }
  });

 
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_KEY);
      if (!stored) {
      
        const sample = [
          {
            id: "a1",
            title: "Recherche colocataire",
            description: "Chambre dispo proche fac, loyer 350€/mois, contact direct.",
            category: "Colocation",
            city: "Paris",
            date: "2025-11-04",
            authorName: "André",
            authorPhoto: "https://i.pravatar.cc/50?u=andre",
          },
          {
            id: "a2",
            title: "Cours de maths / TD",
            description: "Donne des cours de mathématiques pour prépa et licence.",
            category: "Cours",
            city: "Nanterre",
            date: "2025-11-02",
            authorName: "Sarah",
            authorPhoto: "https://i.pravatar.cc/50?u=sarah",
          },
        ];
        localStorage.setItem(LOCAL_KEY, JSON.stringify(sample));
        setAnnonces(sample);
      } else {
        setAnnonces(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Erreur lecture localStorage annonces:", e);
      setAnnonces([]);
      localStorage.setItem(LOCAL_KEY, JSON.stringify([]));
    }
  }, []);


  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const categories = useMemo(() => {
    const cats = new Set(annonces.map(a => a.category).filter(Boolean));
    return ["Tous", ...Array.from(cats)];
  }, [annonces]);

  const filtered = useMemo(() => {
    let list = annonces.slice();
 
    if (q.trim()) {
      const term = q.toLowerCase();
      list = list.filter(a =>
        (a.title + " " + a.description + " " + (a.city || "") + " " + (a.category || ""))
          .toLowerCase()
          .includes(term)
      );
    }

  
    if (category !== "Tous") {
      list = list.filter(a => a.category === category);
    }


    if (sort === "recent") {
      list.sort((x, y) => new Date(y.date) - new Date(x.date));
    } else if (sort === "title") {
      list.sort((x, y) => x.title.localeCompare(y.title));
    }

    return list;
  }, [annonces, q, category, sort]);

  const toggleFavorite = (id) => {
    setFavorites(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">CampusLink</h1>
        <nav className="nav">
          <a href="/">Accueil</a>
          <a href="/annonces" className="active">Annonces</a>
          <a href="/profil">Profil</a>
        </nav>
      </header>

      <main className="main">
        <section className="news" style={{ maxWidth: 1000 }}>
          <div className="news-header" style={{ flexWrap: "wrap", gap: 12 }}>
            <h3>🌀 Annonces</h3>

            <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="text"
                placeholder="Rechercher (titre, description, ville...)"
                className="search-input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                style={{ width: 360 }}
              />

              <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: "8px 10px", borderRadius: 8, background: "#111", color: "#eee", border: "1px solid #333" }}>
                {categories.map(cat => <option value={cat} key={cat}>{cat}</option>)}
              </select>

              <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ padding: "8px 10px", borderRadius: 8, background: "#111", color: "#eee", border: "1px solid #333" }}>
                <option value="recent">Plus récentes</option>
                <option value="title">Titre (A-Z)</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ padding: 20, color: "#ccc" }}>Aucune annonce trouvée.</div>
          ) : (
            filtered.map(a => (
              <AnnonceCard
                key={a.id}
                annonce={a}
                isFavorite={favorites.includes(a.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default Annonces;
