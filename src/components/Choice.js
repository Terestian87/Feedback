import React, { useState } from 'react'


const Choice = ({ data, handleNext }) => {
    const [choice, setChoice] = useState('')
    const handleChoice = (e) => {
        setChoice(e.target.value)
        handleNext()
    }
    return (
        <>
            {data.options.map(({ value, label }) => {
                return (
                    <button
                        // onClick={handleChoice}
                        className="answer-btn"
                        key={value}
                        value={value}
                        onClick={handleChoice}
                    >
                        {label}
                    </button>
                )
            })}
        </>
    )
}

export default Choice