import { Box } from "@chakra-ui/react"
import { TimeCounter } from "easytimer.js"

const SquareTimer = (props: TimerProps) => {
  const { timeValues, color } = props
  return (
    <Box textAlign="center" h="calc(100% - 50px)" pt="18%">
      <span>{timeValues.toString(["minutes", "seconds"])}</span>
    </Box>
  )
}

interface TimerProps {
  timeValues: TimeCounter
  color: string
}

export default SquareTimer
