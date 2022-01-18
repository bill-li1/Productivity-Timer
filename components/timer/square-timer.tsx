import { Box } from "@chakra-ui/react"
import { ITimerSettings } from "../../util/types"

const SquareTimer = (props: TimerProps) => {
  const { timerSettings } = props
  console.log(timerSettings)
  return (
    <Box>
      <Box>Square Timer</Box>
      <p>{JSON.stringify(timerSettings, null, 4)}</p>
    </Box>
  )
}

interface TimerProps {
  timerSettings: ITimerSettings
  setTimerSettings: (newSettings: ITimerSettings) => void
}

export default SquareTimer
