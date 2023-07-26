import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Catagories from './components/Catagories';

function App() {
  return (
    <div className="top-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catagories" element={<Catagories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
