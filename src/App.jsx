import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="starter-layout">
        <header className="starter-header">
          <div className="brand">
            <span className="brand-name">VYOMASANDHI</span>
            <span className="brand-tagline">Ideas, thoughtfully brought to life.</span>
          </div>
          <nav className="starter-nav" aria-label="Main Navigation">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/work">Work</Link>
            <Link to="/process">Process</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main className="starter-content">
          <Routes>
            <Route
              path="/"
              element={
                <section className="starter-view">
                  <h2>Home</h2>
                  <p>Initial starter application route. Awaiting Stage 3 design system and Stage 5 page implementation.</p>
                </section>
              }
            />
            <Route
              path="/services"
              element={
                <section className="starter-view">
                  <h2>Services</h2>
                  <p>Services route initialized. Awaiting Stage 6 page implementation.</p>
                </section>
              }
            />
            <Route
              path="/work"
              element={
                <section className="starter-view">
                  <h2>Work</h2>
                  <p>Work route initialized. Awaiting Stage 7 page implementation.</p>
                </section>
              }
            />
            <Route
              path="/process"
              element={
                <section className="starter-view">
                  <h2>Process</h2>
                  <p>Process route initialized. Awaiting Stage 8 page implementation.</p>
                </section>
              }
            />
            <Route
              path="/contact"
              element={
                <section className="starter-view">
                  <h2>Contact</h2>
                  <p>Contact route initialized. Awaiting Stage 9 page implementation.</p>
                </section>
              }
            />
          </Routes>
        </main>

        <footer className="starter-footer">
          <p className="philosophy">“Understand deeply. Simplify thoughtfully. Build honestly.”</p>
          <p className="copyright">&copy; VYOMASANDHI. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
