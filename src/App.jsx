import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Header.jsx'
import Accueil from './pages/Accueil.jsx'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
