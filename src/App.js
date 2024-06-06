// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Home from './Page/Home';
import RecipeDetail from './Page/RecipeDetail';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
