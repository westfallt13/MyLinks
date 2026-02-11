import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vision from './pages/Vision'
import { ContactForm } from './pages/ContactForm'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/about" className="nav-button">About Me</Link>
        <Link to="/vision" className="nav-button">Mission & Vision</Link>
        <Link to="/portfolio" className="nav-button">My Portfolio</Link>
        <Link to="/contact" className="nav-button">Contact Me</Link>
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