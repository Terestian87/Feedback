import React from 'react'
const Text = ({ handleChange, text }) => {

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
