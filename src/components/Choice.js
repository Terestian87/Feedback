import { React } from 'react'

const Choice = ({ data, handleClick }) => {
    console.log(data)
    return (
        <>
            {data.map(({ value, label }) => {
                return (
                    <button
                        onClick={handleClick}
                        className="answer-btn"
                        key={value}
                        value={value}>{label}
                    </button>
                )
            })}
        </>
    )
}

export default Choice
