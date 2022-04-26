import { useState, useEffect } from "react"
import { Box } from "@chakra-ui/react"
import { TimeCounter } from "easytimer.js"
import { Text } from "@chakra-ui/react"
import "typeface-lato"
import styled from "@emotion/styled"

const TimerBox = styled.span`
  font-family: Lato;
  font-size: 120px;
  font-weight: bold;
  line-height: 15px;
  letter-spacing: 6px;
`

const Timer = (props: TimerProps) => {
  const { timeValues } = props
  const [hours, setHours] = useState(timeValues.hours)

  useEffect(() => {
    setHours(timeValues.hours)
  }, [timeValues.hours])

  return (
    <Box textAlign="center" h="calc(100% - 50px)" pt="75px">
      <TimerBox>
        <Text>
          {(hours > 0 ? hours + ":" : "") +
            timeValues.toString(["minutes", "seconds"])}
        </Text>
      </TimerBox>
    </Box>
  )
}

interface TimerProps {
  timeValues: TimeCounter
}

export default Timer
