import { Box } from "@chakra-ui/react"
import { TimeCounter } from "easytimer.js"

const CircleTimer = (props: TimerProps) => {
  const { timeValues, color } = props
  return (
    <Box textAlign="center" p="3">
      <span>{timeValues.toString(["minutes", "seconds"])}</span>
    </Box>
  )
}

interface TimerProps {
  timeValues: TimeCounter
  color: string
}

export default CircleTimer
