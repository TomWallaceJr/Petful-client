import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import AdoptionPage from './AdoptionPage';
import NotFound from './NotFound';
import ConfirmationPage from './ConfirmationPage';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/adopt' component={AdoptionPage} />
            {/* <Route path='/confirm' component={ConfirmationPage} /> */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;