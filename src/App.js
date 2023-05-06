import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, HashRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import E1ixir from './components/E1ixir/E1ixir'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/e1ixir" element={<E1ixir />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
