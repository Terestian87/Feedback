import React from 'react'
import '../styles/scale.css'
const Rating = ({ handleChoice, choice }) => {


    return (
        <div className="scale-div">
            <div className="box">
                <div className="rating">
                    <input onClick={handleChoice} value={1} className="radio" type="radio" name="rating" id="rate1" checked={choice === '1'} />
                    <label htmlFor="rate1">1</label>
                    <input onClick={handleChoice} value={2} className="radio" type="radio" name="rating" id="rate2" checked={choice === '2'} />
                    <label htmlFor="rate2">2</label>
                    <input onClick={handleChoice} value={3} className="radio" type="radio" name="rating" id="rate3" checked={choice === '3'} />
                    <label htmlFor="rate3">3</label>
                    <input onClick={handleChoice} value={4} className="radio" type="radio" name="rating" id="rate4" checked={choice === '4'} />
                    <label htmlFor="rate4">4</label>
                    <input onClick={handleChoice} value={5} className="radio" type="radio" name="rating" id="rate5" checked={choice === '5'} />
                    <label htmlFor="rate5">5</label>
                    <input onClick={handleChoice} value={6} className="radio" type="radio" name="rating" id="rate6" checked={choice === '6'} />
                    <label htmlFor="rate6">6</label>
                    <input onClick={handleChoice} value={7} className="radio" type="radio" name="rating" id="rate7" checked={choice === '7'} />
                    <label htmlFor="rate7">7</label>
                    <input onClick={handleChoice} value={8} className="radio" type="radio" name="rating" id="rate8" checked={choice === '8'} />
                    <label htmlFor="rate8">8</label>
                    <input onClick={handleChoice} value={9} className="radio" type="radio" name="rating" id="rate9" checked={choice === '9'} />
                    <label htmlFor="rate9">9</label>
                    <input onClick={handleChoice} value={10} className="radio" type="radio" name="rating" id="rate10" checked={choice === '10'} />
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