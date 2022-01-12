import { Box } from "@chakra-ui/react"
import { ITimerSettings } from "../util/types"

const SquareTimer = (props: timerProps) => {
  const { timerSettings } = props
  console.log(timerSettings)
  return (
    <Box border="3px solid red">
      <Box>Square Timer</Box>
      <p>{JSON.stringify(timerSettings, null, 4)}</p>
    </Box>
  )
}

interface timerProps {
  timerSettings: ITimerSettings
}

export default SquareTimer
