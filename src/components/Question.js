import React from "react"

const Question = ({ currentNumber, children }) => {
  return (
    <div>
      <div>{`Letter ${currentNumber + 1}`}</div>
      {children}
    </div>
  )
}

export default Question
