import React from 'react'
import '../styles/scale.css'
const Rating = ({ handleVote }) => {


    return (
        <div className="scale-div">
            <div className="box">
                <div className="rating">
                    <input onClick={handleVote} value={1} className="radio" type="radio" name="rating" id="rate1" />
                    <label htmlFor="rate1">1</label>
                    <input onClick={handleVote} value={2} className="radio" type="radio" name="rating" id="rate2" />
                    <label htmlFor="rate2">2</label>
                    <input onClick={handleVote} value={3} className="radio" type="radio" name="rating" id="rate3" />
                    <label htmlFor="rate3">3</label>
                    <input onClick={handleVote} value={4} className="radio" type="radio" name="rating" id="rate4" />
                    <label htmlFor="rate4">4</label>
                    <input onClick={handleVote} value={5} className="radio" type="radio" name="rating" id="rate5" />
                    <label htmlFor="rate5">5</label>
                    <input onClick={handleVote} value={6} className="radio" type="radio" name="rating" id="rate6" />
                    <label htmlFor="rate6">6</label>
                    <input onClick={handleVote} value={7} className="radio" type="radio" name="rating" id="rate7" />
                    <label htmlFor="rate7">7</label>
                    <input onClick={handleVote} value={8} className="radio" type="radio" name="rating" id="rate8" />
                    <label htmlFor="rate8">8</label>
                    <input onClick={handleVote} value={9} className="radio" type="radio" name="rating" id="rate9" />
                    <label htmlFor="rate9">9</label>
                    <input onClick={handleVote} value={10} className="radio" type="radio" name="rating" id="rate10" />
                    <label htmlFor="rate10">10</label>
                </div>
            </div>
        </div>
    )
}

export default Rating







// const returnedInput = () => {
//     for (let i = 0; i <= 10; i = i + 1) {
//         return <>
//             <input className="radio" type="radio" name="rating" id={i} />
//             <label htmlFor={i}>{i}</label>
//         </>
//     }
// }