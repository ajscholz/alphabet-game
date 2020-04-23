import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import LetterCard from "./LetterCard"
import useAlphabet from "../hooks/useAlphabet"
import useInterval from "../hooks/useInterval"

const CardDeck = ({ currentLetter, check, className }) => {
  const letters = useAlphabet()
  const audioRef = useRef()

  useInterval(() => {
    audioRef.current.play()
  }, 2000)

  let currentLetterCards = [currentLetter.letter]

  while (currentLetterCards.length < 3) {
    currentLetterCards.push(
      letters[Math.floor(Math.random() * letters.length)].letter
    )
    // make sure there are no duplicates
    currentLetterCards = [...new Set(currentLetterCards)]
  }

  const length = currentLetterCards.length - 1
  for (let i = length; i > 0; i--) {
    const j = Math.floor(Math.random() * currentLetterCards.length)
    const temp = currentLetterCards[i]
    currentLetterCards[i] = currentLetterCards[j]
    currentLetterCards[j] = temp
  }

  return (
    <div className={className}>
      <audio src={currentLetter.file} autoPlay ref={audioRef} />
      {currentLetterCards.map(letter => (
        <LetterCard click={check} letter={letter} />
      ))}
      {/* <LetterCard click={check} letter={currentLetter.letter} />
      <LetterCard click={check} letter="B" /> */}
    </div>
  )
}

export default styled(CardDeck)``
