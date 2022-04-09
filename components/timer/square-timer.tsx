import { Box } from "@chakra-ui/react"
import { TimeCounter } from "easytimer.js"
import { Text, useColorModeValue } from "@chakra-ui/react"
import "typeface-lato"
import styled from "@emotion/styled"

const TimerBox = styled.span`
  font-family: Lato;
  font-size: 120px;
  font-weight: bold;
  line-height: 15px;
  letter-spacing: 5px;
`

const SquareTimer = (props: TimerProps) => {
  const { timeValues, color } = props
  return (
    <Box textAlign="center" h="calc(100% - 50px)" pt="18%">
      <TimerBox>
        <Text>{timeValues.toString(["minutes", "seconds"])}</Text>
      </TimerBox>
    </Box>
  )
}

interface TimerProps {
  timeValues: TimeCounter
  color: string
}

export default SquareTimer
