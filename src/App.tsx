import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import './index.css';

function App() {
  return (
    <div className="bg-img">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
