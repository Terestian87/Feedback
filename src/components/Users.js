import React, { useState, useEffect } from 'react'
import '../styles/users.css'
import Rating from './Rating'
import Text from './Text'
import Choice from './Choice'
//functional component
const Users = () => {
    const [users, setUsers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [questionNum, setquestionNum] = useState(0);
    const [currentQ, setCurrentQ] = useState({});
    const [answers, setAnswers] = useState([]);
    const [chosenId, setChosenId] = useState(null)


    //choice handler
    const [choice, setChoice] = useState('')
    const handleChoice = (e) => {
        setChoice(e.target.value)
    }

    //Fetch data in asyn
    const fetchUserData = async () => {
        //take data from json in url and store in res const
        const userRes = await fetch('https://frontend-exercise-api.netlify.app/.netlify/functions/server/users')
        //make response usable
        const userData = await userRes.json()
        // call setUser hook to store response (data) in user
        setUsers(userData)
    }

    const fetchQuestions = async () => {
        const questionsRes = await fetch('https://frontend-exercise-api.netlify.app/.netlify/functions/server/questions')
        const questionsData = await questionsRes.json()
        setQuestions(questionsData)
    }

    // componentDidMount functional style
    useEffect(() => {
        fetchUserData()
        fetchQuestions()
        //dependency set to empty array so useEffect loaded only once
    }, [])
    //                                                                                                  <<>>
    // TODO: Qui puoi controllare se hai già una risposta o no e in quel caso settarla
    useEffect(() => {
        setCurrentQ(questions[questionNum])
    }, [questionNum, questions])

    //conditional rendering on click
    const handleFirstClick = (id) => {
        setChosenId(id)
    }

    const handleSetAnswers = (arr, value, index) => {
        const updatedArr = arr.slice();
        updatedArr[index] = value;
        setAnswers(updatedArr)
        setChoice('')
    }

    const handleNext = () => {
        if (questionNum >= questions.length - 1) {
            return
        }
        if (currentQ.required == true && choice == '') {
            return
        }
        handleSetAnswers(answers, choice, questionNum)
        const newQuestion = questionNum + 1
        setquestionNum(newQuestion)
    }
    const handlePrevious = () => {
        if (questionNum <= 0) {
            return
        }

        const newQuestion = questionNum - 1
        setquestionNum(newQuestion)
        setChoice('')
    }
    const handleSkip = () => {
        setChoice('')
        handleNext()
    }

    return (
        <>
            {!chosenId &&
                <div className="user-list">
                    {users.map(({ firstName, avatar, id, lastName }) => {
                        return (
                            <div key={id} className="userCard">
                                <div className="card-left">
                                    <img src={avatar} alt="avatar of user" className="avatar" />
                                    <div className="fullName">{firstName} {lastName}</div>
                                </div>
                                <button className="btn card-right" onClick={() => handleFirstClick(id)}>Leave Feedback</button>
                            </div>
                        )
                    })
                    }
                </div>
            }
            {
                chosenId &&
                <div className="question-div">
                    <h2 className="question-label">{currentQ.label}</h2>
                    <div className="feedback-container">
                        {currentQ.type === 'scale' && <Rating handleChoice={handleChoice} />}
                        {currentQ.type === 'multipleChoice' && <Choice data={currentQ} handleChoice={handleChoice} />}
                        {currentQ.type === 'text' && <Text choice={choice} handleChoice={handleChoice} />}
                    </div>
                    <div className="nav-tools">
                        <button onClick={handlePrevious}>Previous</button>
                        {!currentQ.required &&
                            <button onClick={handleSkip}>Skip</button>
                        }
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Users





