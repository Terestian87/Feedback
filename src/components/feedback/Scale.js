import React from 'react'
import '../../styles/feedback/scale.scss'

const handleColor = (value, index) => {
    if (!value) return ''
    if (index <= value) {
        if (value < 3) {
            return 'red'
        } else if (value < 7) {
            return 'yellow'
        } else if (value >= 7) {
            return 'green'
        } return ''
    }
}



const Scale = ({ value }) => {
    //.map(currentValue, index)
    const arr = [...Array(10)].map((e, i) => <div className={`scale-box-value ${handleColor(value, i)}`} key={i}></div>)
    return <div className='box-container'>{arr}</div>
}

export default Scale
