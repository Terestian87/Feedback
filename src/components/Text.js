import React from 'react'
const Text = ({ handleChoice, choice }) => {

    return (
        <div className="text-div">
            <textarea
                cols="120"
                rows="20"
                className="textarea"
                placeholder="Write something.."
                value={choice}
                onChange={(e) => handleChoice(e.target.value)}
            />
        </div>

    )
}

export default Text
