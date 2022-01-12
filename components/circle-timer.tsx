import { Box } from "@chakra-ui/react"
import { ITimerSettings } from "../util/types"

const CircleTimer = (props: timerProps) => {
  const { timerSettings } = props
  console.log(timerSettings)
  return (
    <Box border="3px solid red">
      <Box>Circle Timer</Box>
      <p>{JSON.stringify(timerSettings, null, 4)}</p>
    </Box>
  )
}

interface timerProps {
  timerSettings: ITimerSettings
}

export default CircleTimer
