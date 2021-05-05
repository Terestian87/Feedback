import React from 'react'
import '../../styles/feedback/scale.css'

const Scale = ({ value }) => {
    //.map(currentValue, index)
    const arr = [...Array(10)].map((e, i) => <div className="scale-box-value" key={i}></div>)
    return <div className='box-container'>{arr}</div>
}

export default Scale
