import React, { useState } from "react"
import styled from "styled-components"
import Question from "./Question"
import useAlphabet from "../hooks/useAlphabet"
import CardDeck from "./CardDeck"
import { animated } from "react-spring"

const Game = ({ className }) => {
  const letters = useAlphabet()

  const [gameState, setGameState] = useState({
    correct: 0,
    incorrect: 0,
    currentLetter: letters[Math.floor(Math.random() * letters.length)],
    remainingLetters: [...letters], // make a copy of the array, or there are issues down the road
    letters: letters,
    won: false,
  })

  const check = clickedLetter => {
    if (clickedLetter === gameState.currentLetter.letter) {
      if (gameState.correct === 25) {
        setGameState({ ...gameState, won: true })
        return
      }

      const remaining = gameState.remainingLetters.filter(
        letter => letter.letter !== gameState.currentLetter.letter
      )

      const newLetter =
        letters[remaining[Math.floor(Math.random() * remaining.length)].index]

      setGameState({
        ...gameState,
        correct: gameState.correct + 1,
        remainingLetters: remaining,
        currentLetter: newLetter,
      })
      return
    }
    setGameState({ ...gameState, incorrect: gameState.incorrect + 1 })
  }

  return (
    <animated.div className={className}>
      {gameState.won ? (
        <>
          <YouWon>YOU WON!</YouWon>
          <button
            onClick={() =>
              setGameState({
                correct: 0,
                incorrect: 0,
                currentLetter:
                  letters[Math.floor(Math.random() * letters.length)],
                remainingLetters: [...letters], // make a copy of the array, or there are issues down the road
                letters: letters,
                won: false,
              })
            }
          >
            Start over
          </button>
        </>
      ) : (
        <>
          <Header>
            <div>Letters Correct: {gameState.correct}</div>
            <div>Letters Incorrect: {gameState.incorrect}</div>
          </Header>
          <Question>
            <CardDeck currentLetter={gameState.currentLetter} check={check} />
          </Question>
        </>
      )}
    </animated.div>
  )
}

export default styled(animated(Game))`
  width: 100%;
`

const Header = styled.div`
  margin: 3em 0;
  display: flex;
  justify-content: space-between;
`

const YouWon = styled.div`
  height: 2em;
  font-size: 5em;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 0.05em;
`
