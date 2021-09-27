import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Index from '../components/Index';
import Title from '../components/Title';


const AppRouter = () => (

    <BrowserRouter>

        <>


            <Switch>

                <Route
                    exact path='/'
                    render={(props) => (
                    <Index {...props} />
                    
                    )}
                />


            <Route path="/title" component={Title} /> 


            </Switch>
        
        </>

        
    </BrowserRouter>
)

export default AppRouter;

