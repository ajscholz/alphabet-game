import React, { useState } from "react"
import styled from "styled-components"
import PlayButton from "../components/PlayButton"
import { useTransition, animated } from "react-spring"

import Game from "./Game"

const GameSuface = ({ className }) => {
  const [playing, setPlaying] = useState(false)

  const transitions = useTransition(playing, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <div className={className}>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <Game key={key}>
            <button onClick={() => setPlaying(!playing)}>stop playing</button>
          </Game>
        ) : (
          <PlayButton onClick={() => setPlaying(true)} style={props} key={key}>
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              height="36"
              width="36"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Play Game
          </PlayButton>
        )
      )}
    </div>
  )
}

export default styled(GameSuface)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
