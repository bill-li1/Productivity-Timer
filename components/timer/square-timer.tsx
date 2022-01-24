import { Box } from "@chakra-ui/react"
import { TimeCounter } from "easytimer.js"

const SquareTimer = (props: TimerProps) => {
  const { timeValues, color } = props
  return (
    <Box textAlign="center" p="85px">
      <span>{timeValues.toString(["minutes", "seconds"])}</span>
    </Box>
  )
}

interface TimerProps {
  timeValues: TimeCounter
  color: string
}

export default SquareTimer
