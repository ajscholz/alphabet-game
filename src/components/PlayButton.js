import styled from "styled-components"
import { animated } from "react-spring"

const PlayButton = styled(animated.button)`
  padding: 1em 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  max-width: 80%;
  font-size: 2.5em;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;
  border-radius: 10000px;
  line-height: 1.15em;

  & svg {
    margin-right: 0.5em;
  }
`

export default PlayButton
