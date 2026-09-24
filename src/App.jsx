import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./App.css"

import Home from "./pages/home"
import About from "./pages/about"
import Programs from "./pages/programs"
import Activities from "./pages/activities"
import Facilities from "./pages/facilities"
import Gallery from "./pages/gallery"
import Contact from "./pages/contact"
import Admission from "./pages/admission"

function App() {
  return (
    <BrowserRouter>
      
      <header className="header">
        <div className="logo">
        <img src="/logo.png" alt="TN Happy Kids" />
        </div>

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admission" className="admission-btn">
            Admission
          </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </main>

      <footer className="footer">
        <h3>TN Happy Kids</h3>
        <p>Learn, Play & Grow</p>
        <p>© 2026 TN Happy Kids. All Rights Reserved.</p>
      </footer>

    </BrowserRouter>
  )
}

export default App