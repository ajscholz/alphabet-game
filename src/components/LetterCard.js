import React from "react"
import styled from "styled-components"

const LetterCard = ({ className, click, letter }) => {
  return (
    <button className={className} onClick={() => click(letter)}>
      {letter}
    </button>
  )
}

export default styled(LetterCard)`
  font-size: 4em;
  font-weight: bold;
  color: darkslategray;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 1em 1em;
  margin: 0.25em;
`
