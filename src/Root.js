import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home.js';
import About from './pages/about.js';
import Investing from './pages/investing.js';
import NotFound from './pages/notFound.js';
import SearchPage from './pages/search.js';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/investing' exact component={Investing} />
        <Route path='/search' exact component={SearchPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
