import React from 'react'
import '../styles/rating.scss'
const Rating = ({ handleChoice, choice }) => {


    return (
        <div className="rating-div">
            <div className="box">
                <div className="rating">
                    {
                        [...(new Array(10))].map((val, i) => {
                            const value = i + 1

                            return (
                                <label htmlFor={`rate${value}`} key={value} className={choice === value ? 'selected' : undefined}>
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
