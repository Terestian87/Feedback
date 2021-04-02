import React, { useState, useEffect } from 'react'
import '../styles/users.css'
import Rating from './Rating'
import Text from './Text'
import Choice from './Choice'
//functional component
const Users = () => {
    const [users, setUsers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [questionNum, setQuestionNum] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [chosenId, setChosenId] = useState(null);
    const [completed, setCompleted] = useState({})
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
    }, [])

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

    //change it to boolean
    const handleCompletedFeedback = (user, answers) => {
        const paired = {
            id: user,
            answers: [answers]
        }
        // const defaultNum = questionNum - 8
        setCompleted(paired)
        console.log(paired)
        console.log(completed)
    }



    const handleNext = () => {
        if (questionNum === questions.length - 1) {
            handleCompletedFeedback(chosenId, answers)
            handleSetAnswers(answers, choice, questionNum)
            const newQuestion = 0
            setQuestionNum(newQuestion)
            const defaultId = null
            setChosenId(defaultId)
            return
        }
        if (questions[questionNum].required === true && choice === '') { return }
        handleSetAnswers(answers, choice, questionNum)
        const newQuestion = questionNum + 1
        setQuestionNum(newQuestion)
    }

    const handlePrevious = () => {
        if (questionNum <= 0) {
            return
        }
        const newQuestion = questionNum - 1
        setQuestionNum(newQuestion)
        setChoice('')
    }

    const handleSkip = () => {
        setChoice(null)
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
                    <h2 className="question-label">{questions[questionNum].label}</h2>
                    <div className="feedback-container">
                        {questions[questionNum].type === 'scale' && <Rating handleChoice={handleChoice} />}
                        {questions[questionNum].type === 'multipleChoice' && <Choice data={questions[questionNum]} handleChoice={handleChoice} />}
                        {questions[questionNum].type === 'text' && <Text choice={choice} handleChoice={handleChoice} />}
                    </div>
                    <div className="nav-tools">
                        <button onClick={handlePrevious}>Previous</button>
                        {!questions[questionNum].required &&
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





