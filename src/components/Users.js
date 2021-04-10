import React, { useState, useEffect } from 'react'
import '../styles/users.css'
import Rating from './Rating'
import Text from './Text'
import Choice from './Choice'
//functional component

const Users = ({ getStore }) => {
    const [users, setUsers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [questionNum, setQuestionNum] = useState(0);
    const [chosenId, setChosenId] = useState(null);
    // const [completed, setCompleted] = useState(false);
    const [feedbackData, setFeedbackData] = useState({})

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

    useEffect(() => {
        getStore('feedback', async (store) => {
            let cursor = await store.openCursor();
            const newFeedbacks = {}

            while (cursor) {
                const { key } = cursor
                newFeedbacks[key] = cursor.value
                cursor = await cursor.continue();
            }
            setFeedbackData(newFeedbacks)
        })
    }, [getStore]) // aggiungi completed

    useEffect(() => {
        if (!chosenId) {
            return
        }

        getStore('feedback', async (store) => {
            const currentFeedback = await store.get(chosenId)
            const { answers } = currentFeedback
            if (answers[questionNum] === null) {
                return
            }
            setChoice(answers[questionNum])
        })
    }, [questionNum, chosenId])


    //conditional rendering on click
    const handleFirstClick = (id) => {
        setChosenId(id)

        getStore('feedback', async store => {
            const currentFeedback = await store.get(id)
            if (!currentFeedback) {
                await store.put({
                    isSubmitted: false,
                    answers: [...Array(questions.length)].map(() => null),
                }, id)
            }
        })
    }

    const handleSetAnswers = (value, index) => {
        getStore('feedback', async (store) => {
            const currentFeedback = await store.get(chosenId)  // data[id]
            const { answers, isSubmitted } = currentFeedback
            answers[index] = value
            await store.put({
                isSubmitted,
                answers
            }, chosenId)
        })

        setChoice('')
    }

    //change it to boolean
    const handleCompletedFeedback = (user) => {
        // const paired = {
        //     id: user,
        //     answers: [answers]
        // }
        // const defaultNum = questionNum - 8
        // setCompleted(paired)
        // getStore('feedback', store => {

        //     await store.put({
        //         issubmitted: true,
        //         answers: paired
        //     })
        // })
    }

    const handleNext = () => {
        if (questionNum === questions.length - 1) {
            handleCompletedFeedback(chosenId)
            handleSetAnswers(choice, questionNum)
            const newQuestion = 0
            setQuestionNum(newQuestion)
            const defaultId = null
            setChosenId(defaultId)
            return
        }
        if (questions[questionNum].required === true && choice === '') { return }
        handleSetAnswers(choice, questionNum)
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
                        {questions[questionNum].type === 'scale' && <Rating handleChoice={handleChoice} choice={choice} />}
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





//adattare le risposte aglle altre due tipi di domande
//impsiotare is submitted da non fare ricvedfere gli user completi nella lsit ainiziale in modo che a seconda del true o false compaia un bottone diverso

//ultima pagina mostrare gli utienti per cui issubmitted è false filtrando quelli gia completi
