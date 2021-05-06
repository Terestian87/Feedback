import React from 'react'
import '../../styles/feedback/choice.scss'

const colors = {
    1: 'red',
    2: 'yellow',
    3: 'green',
}

const handleColor = (value, index) => {
    // Se non c'è value, ritorna una stringa vuota
    if (!value) return ''

    if (index < value) return colors[value]
}

const Choice = ({ value }) => {
    // const [color, setColor] = useState('')

    // Tutte i blocchi sono di default grigi
    // In base alla riposta, vogliamo colorare solo alcuni blocchi
    // In base alla risposta, il colore cambia

    //.map(currentValue, index)
    const arr = [...Array(3)].map((e, i) => <div className={`standard-value ${handleColor(value, i)}`} key={i}></div>)
    console.log(handleColor(value))
    return <div className='box-container'>{arr}</div>
}

export default Choice


// const arr = [...Array(3)].map((e, i) => {
//     if (i <= value - 1) {
//         <div className={`${handleColor(value)}-value`} key={i}></div>
//     } else {
//         <div className="-value" key={i}></div>
//     }
// })