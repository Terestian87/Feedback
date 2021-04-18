import React, { useEffect, useState } from 'react'

const Feedbacks = ({ getStore }) => {
    // useEffect
    // leggere dati nel database
    // prendere feedback dati agli utenti e salvare quelli completati

    const [feedbackData, setFeedbackData] = useState({})

    useEffect(() => {
        getStore('feedback', async (store) => {
            // Crea un cursore che serve per poter iterare la collezione
            let cursor = await store.openCursor();
            // Oggetto che conterra' i feedback che troveremo
            const newFeedbacks = {}

            // Serve per iterare
            while (cursor) {
                // Prende la chiave
                const { key } = cursor
                // Setta nel nuovo oggetto newFeedbacks il valore di cursor 
                // con chiave key
                // Gia filtrati per isSubmitted true
                if (cursor.value.isSubmitted) {
                    newFeedbacks[key] = cursor.value
                }
                // Passa al prossimo elemento
                // Quando finiscono gli elementi, cursor diventa null
                cursor = await cursor.continue();
            }

            // ritorna array con keys come elementi ['asfdad', 'asdfasf'] Object.keys(newFeedbacks)
            // stessa cosa con valori Object.values(newFeedbacks)
            // ritorna un array di array [value, key] Object.entries(newFeedbacks)

            setFeedbackData(newFeedbacks)
        })
    }, [getStore])

    const completedUsers = () => {
        return (
            <ul>
                {
                    Object.keys(feedbackData).map((key) => {
                        const { answers } = feedbackData[key]

                        return <li></li>
                    })
                }
            </ul>
        )
    }



    return (

        <div>feedback.js</div>        // <CompletedUsers />
    )
}

export default Feedbacks


//spstare fetch in app per avere gli user
//refactoring di text ------- check
