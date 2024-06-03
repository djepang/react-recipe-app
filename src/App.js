import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={RecipeList} />
            <Route path="/recipe/:id" component={RecipeDetail} />
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
