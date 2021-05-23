import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductList} />
          <Route path='/ProductDetails/:id' exact component={ProductDetails} />
          <Route> Incorrect Route </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
