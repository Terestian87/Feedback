import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { openDB } from 'idb';
// components import
import Footer from './Footer'
import Navbar from './Navbar';
import Users from './Users';
import Feedbacks from './Feedbacks'
//style impoort
import '../styles/app.scss';

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

    const [users, setUsers] = useState([]);
    const [questions, setQuestions] = useState([]);
    //Fetch data in asyn
    const fetchUserData = async () => {
        //take data from json in url and store in res const
        const userRes = await fetch('https://frontend-exercise-api.netlify.app/.netlify/functions/server/users')
        //make response usable
        const userData = await userRes.json()
        // call setUser hook to store response (data) in user
        setUsers(userData)
    }
    // componentDidMount functional style
    useEffect(() => {
        fetchUserData()
        fetchQuestions()
    }, [])

    const fetchQuestions = async () => {
        const questionsRes = await fetch('https://frontend-exercise-api.netlify.app/.netlify/functions/server/questions')
        const questionsData = await questionsRes.json()
        setQuestions(questionsData)
    }

    return (
        <div className="app-div">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Users getStore={getStore} questions={questions} users={users} />
                    </Route>
                    <Route path="/my-feedback">
                        <Feedbacks getStore={getStore} users={users} questions={questions} />
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


//pre tag per il texr
//togliere tutti i css
//altezza dinamica per testo