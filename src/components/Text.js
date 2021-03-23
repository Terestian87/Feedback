import React, { useState } from 'react'
const Text = () => {
    const [text, setText] = useState('')


    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="text-div">
            <textarea
                cols="120"
                rows="20"
                className="textarea"
                placeholder="Write something.."
                value={text}
                onChange={handleChange}
            />
        </div>

    )
}

export default Text
