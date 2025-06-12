import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/personal-portfolio/" element={<Home />} />
        <Route path="/personal-portfolio/Portfolio" element={<Portfolio />} />
        <Route path="/personal-portfolio/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

