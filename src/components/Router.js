import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import AdoptionPage from './AdoptionPage';
import NotFound from './NotFound';
import { PetfulProvider } from '../Context/Context';


const Router = () => (
    <PetfulProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/adopt' component={AdoptionPage} />
                {/* <Route path='/confirm' component={ConfirmationPage} /> */}
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </PetfulProvider>
)

export default Router;