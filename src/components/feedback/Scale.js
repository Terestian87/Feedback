import React from 'react'

const Scale = ({ value }) => {
    return <progress min="1" max="10" value={value} className="value-box">{value}</progress>
}

export default Scale
