import React, { useState, useEffect } from 'react'
import '../styles/users.css'
import Rating from './Rating'
import Text from './Text'
//functional component
const Users = () => {
    const [user, setUser] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [viewList, setViewList] = useState(true);
    const [questionNum, setquestionNum] = useState(0);
    const [questionType, setQuestionType] = useState('');
    const [required, setRequired] = useState();
    const [currentQ, setCurrentQ] = useState([]);





    //Fetch data in asyn
    const fetchUserData = async () => {
        //take data from json in url and store in res const
        const userRes = await fetch('https://frontend-exercise-api.netlify.app/.netlify/functions/server/users')
        //make response usable
        const userData = await userRes.json()
        // call setUser hook to store response (data) in user
        setUser(userData)
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


    //set current question data for accessing during rendering
    const handleQuestData = (newQuestion = 0) => {
        setQuestionType(questions[newQuestion].type)
        setCurrentQ(questions[newQuestion])
        setRequired(questions[newQuestion].required)
    }

    //conditional rendering on click
    const handleClick = () => {
        setViewList(!viewList)
        handleQuestData()
    }
    const handleNext = () => {
        if (questionNum >= questions.length - 1) {
            return
        }
        const newQuestion = questionNum + 1
        setquestionNum(newQuestion)
        handleQuestData(newQuestion)
    }
    const handlePrevious = () => {
        if (questionNum <= 0) {
            return
        }
        const newQuestion = questionNum - 1
        setquestionNum(newQuestion)
        handleQuestData(newQuestion)
    }
    const handleSkip = () => {
        handleNext()
    }
    // const Scale = () => <Rating />
    // const Text = () => <Text />

    // import MultipleChoice from './choice'
    const MultipleChoice = () => {

        return (
            <>
                {currentQ.options.map(({ value, label }) => {
                    return (
                        <button
                            onClick={handleNext}
                            className="answer-btn"
                            key={value}
                            value={value}>{label}
                        </button>
                    )
                })}
            </>
        )
    }

    return (
        <>
            {viewList &&
                <div className="user-list">
                    {user.map(({ firstName, avatar, id, lastName }) => {
                        return (
                            <div key={id} className="userCard">
                                <div className="card-left">
                                    <img src={avatar} alt="avatar of user" className="avatar" />
                                    <div className="fullName">{firstName} {lastName}</div>
                                </div>
                                <button className="btn card-right" onClick={handleClick}>Leave Feedback</button>
                            </div>
                        )
                    })
                    }
                </div>
            }
            {
                !viewList &&
                < div className="question-div">
                    <h2 className="question-label">{currentQ.label}</h2>
                    <div className="feedback-container">
                        {questionType === 'scale' && <Rating />}
                        {questionType === 'multipleChoice' && <MultipleChoice />}
                        {questionType === 'text' && <Text />}
                    </div>
                    <div className="nav-tools">
                        <button onClick={handlePrevious}>Previous</button>
                        {!required &&
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





