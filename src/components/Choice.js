import React from 'react'


const Choice = ({ data, handleChoice, choice }) => {

    return (
        <>
            {data.options.map(({ value, label }) => {
                return (
                    // <button
                    //     // onClick={handleChoice}
                    //     className="answer-btn"
                    //     key={value}
                    //     value={value}
                    //     onClick={handleChoice}
                    //     checed={choice === value}
                    // >
                    //     {label}
                    // </button>
                    <div className="choice-div">
                        <input onClick={handleChoice} value={value} className="radio-choice" type="radio" name="rating" id={`rate${value}`} cheched={choice === value} />
                        <label htmlFor={`rate${value}`}>{label} click me</label>
                    </div>

                )
            })}
        </>
    )
}

export default Choice