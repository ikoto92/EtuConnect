import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Header.jsx'
import Accueil from './pages/Accueil.jsx'
import PagePost from './pages/pagePost.jsx'
import Communaute from './pages/Communaute.jsx';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
            <Route path="/Accueil" element={<Accueil />} />
            <Route path="/pagePost" element={<PagePost />} />
            <Route path="/pageCommunaute" element={<Communaute />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
