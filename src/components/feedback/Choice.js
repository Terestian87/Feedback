import React from 'react'
import '../../styles/feedback/choice.css'

const Choice = ({ value }) => {
    //.map(currentValue, index)
    const arr = [...Array(3)].map((e, i) => <div className="choice-box-value" key={i}></div>)
    return <div className='box-container'>{arr}</div>
}

export default Choice
