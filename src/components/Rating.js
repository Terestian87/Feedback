import React from 'react'
import '../styles/scale.css'
const Rating = () => {
    return (
        <div className="scale-div">
            <div className="box">
                <div className="rating">
                    <input className="radio" type="radio" name="rating" id="rate1" />
                    <label htmlFor="rate1">1</label>
                    <input className="radio" type="radio" name="rating" id="rate2" />
                    <label htmlFor="rate2">2</label>
                    <input className="radio" type="radio" name="rating" id="rate3" />
                    <label htmlFor="rate3">3</label>
                    <input className="radio" type="radio" name="rating" id="rate4" />
                    <label htmlFor="rate4">4</label>
                    <input className="radio" type="radio" name="rating" id="rate5" />
                    <label htmlFor="rate5">5</label>
                    <input className="radio" type="radio" name="rating" id="rate6" />
                    <label htmlFor="rate6">6</label>
                    <input className="radio" type="radio" name="rating" id="rate7" />
                    <label htmlFor="rate7">7</label>
                    <input className="radio" type="radio" name="rating" id="rate8" />
                    <label htmlFor="rate8">8</label>
                    <input className="radio" type="radio" name="rating" id="rate9" />
                    <label htmlFor="rate9">9</label>
                    <input className="radio" type="radio" name="rating" id="rate10" />
                    <label htmlFor="rate10">10</label>
                </div>
            </div>
        </div>
    )
}

export default Rating