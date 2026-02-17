import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">React Router v6 + React 18</h1>
        <nav className="app__nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
