import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vision from './pages/Vision'
import { ContactForm } from './pages/ContactForm'
import Portfolio from './pages/Portfolio'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <BrowserRouter>
      <nav>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-button" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="nav-button" onClick={closeMenu}>About</Link>
          <Link to="/vision" className="nav-button" onClick={closeMenu}>Vision</Link>
          <Link to="/portfolio" className="nav-button" onClick={closeMenu}>Web DevPortfolio</Link>
          <Link to="/contact" className="nav-button" onClick={closeMenu}>Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App