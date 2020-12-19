import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import AdoptionPage from './AdoptionPage';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/adopt' component={AdoptionPage} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;