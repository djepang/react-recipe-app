import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
>>>>>>> 9fa5795131ebabc328ae5400ce87c4aeab1d9244

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main>
<<<<<<< HEAD
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
=======
          <Switch>
            <Route exact path="/" component={RecipeList} />
            <Route path="/recipe/:id" component={RecipeDetail} />
          </Switch>
>>>>>>> 9fa5795131ebabc328ae5400ce87c4aeab1d9244
        </Main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
