import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home.js';
import About from './pages/about.js';
import Investing from './pages/investing.js';
import Tickers from './pages/tickers.js';
import NotFound from './pages/notFound.js';
import SearchPage from './pages/search.js';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/investing' exact component={Investing} />
<<<<<<< HEAD
        <Route path='/alltickers' exact component={Tickers} />
=======
        <Route path='/search' exact component={SearchPage} />
>>>>>>> 5b57da772627ed5c51e88fa09c3ac19ec33812a8
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
