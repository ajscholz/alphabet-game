import React from "react"
import "../components/baseStyles.css"
import Backdrop from "../components/Backdrop"
import Container from "../components/Container"
import GameSuface from "../components/GameSurface"

const IndexPage = () => {
  return (
    <Backdrop>
      <Container>
        <h1>Alphabet Game</h1>
        <GameSuface />
      </Container>
    </Backdrop>
  )
}

export default IndexPage
