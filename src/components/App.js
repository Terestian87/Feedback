import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { openDB } from 'idb';
// components import
import Footer from './Footer'
import Navbar from './Navbar';
import Users from './Users';
import Feedbacks from './Feedbacks'
//style impoort
import '../styles/app.css';

const dbName = 'honesto'

const getStore = async (storeName, cb) => {
    const db = openDB(dbName, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore("feedback");
            }
        }
    })
    const tx = (await db).transaction(storeName, 'readwrite')
    const store = await tx.objectStore(storeName)
    if (cb) {
        cb(store)
    }
};

const App = () => {

    return (
        <div className="app-div">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Users getStore={getStore} />
                    </Route>
                    <Route path="/my-feedback">
                        <Feedbacks getStore={getStore} />
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