import { Box } from "@chakra-ui/react"
import { ITimerSettings } from "../../util/types"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

const CircleTimer = (props: TimerProps) => {
  const { timerSettings, setTimerSettings } = props
  return (
    <Box>
      <Box fontSize="18px" textAlign="center">
        Circle Timer
      </Box>
    </Box>
  )
}
interface TimerProps {
  timerSettings: ITimerSettings
  setTimerSettings: (newSettings: ITimerSettings) => void
}

export default CircleTimer
