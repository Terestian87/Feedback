import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// components import
import Footer from './Footer'
import Navbar from './Navbar';
import Users from './Users';

//style impoort
import '../styles/app.css'



const App = () => {
    return (
        <div className="app-div">

            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Users />
                    </Route>
                    <Route path='*'>
                        <div>404 not found</div>
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App