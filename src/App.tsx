import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import './index.css';

function App() {
  return (
    <div className="bg-img">
      <Router>
        <Header />
        <Home />
      </Router>
    </div>
  );
}

export default App;
