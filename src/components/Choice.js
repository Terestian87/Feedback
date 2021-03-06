import React from 'react'
import '../styles/choice.scss'

const Choice = ({ data, handleChoice, choice }) => {

    return (
        <>
            {data.options.map(({ value, label }) => {
                return (
                    <div className="choice-div" key={value}>
                        <input
                            onChange={() => handleChoice(value)}
                            value={value}
                            className="radio-choice"
                            type="radio"
                            name="rating"
                            id={`rate${value}`}
                            checked={choice === value} />
                        <label htmlFor={`rate${value}`}>{label}</label>
                    </div>
                )
            })}
        </>
    )
}

export default Choice