import React from 'react'


const Choice = ({ data, handleChoice }) => {

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