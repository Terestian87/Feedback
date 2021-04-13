import React from 'react'
import '../styles/rating.css'
const Rating = ({ handleChoice, choice }) => {


    return (
        <div className="rating-div">
            <div className="box">
                <div className="rating">
                    {
                        [...(new Array(10))].map((val, i) => {
                            const value = i + 1
                            console.log(choice, value)
                            return (
                                <label htmlFor={`rate${value}`} key={value} className={choice === value && 'selected'}>
                                    <input value={value} className="radio" type="radio" name="rating" id={`rate${value}`} onChange={() => handleChoice(value)} />
                                    {value}
                                </label>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Rating
