import { Box, useColorModeValue } from "@chakra-ui/react"
import { ITimerSettings } from "../../util/types"
import CircleTimer from "./circle-timer"
import SquareTimer from "./square-timer"
import TimerSelector from "./timer-selector"

const Timer = (props: TimerProps) => {
  const { timerSettings, setTimerSettings } = props
  const returnTime = (timerType: string) => {
    switch (timerType) {
      case "Pomodoro":
        return timerSettings.pomodoroTime
      case "Short Break":
        return timerSettings.shortBreakTime
      case "Long Break":
        return timerSettings.longBreakTime
    }
  }
  const returnColor = (timerType: string) => {
    switch (timerType) {
      case "Pomodoro":
        return timerSettings.pomodoroColor
      case "Short Break":
        return timerSettings.shortBreakColor
      case "Long Break":
        return timerSettings.longBreakColor
    }
  }

  return (
    <Box
      bgColor={useColorModeValue("#E6D7C4", "#3E3E43")}
      borderRadius="20px"
      h="300"
      mb="30"
      p="10px"
    >
      <TimerSelector timerSettings={timerSettings} />
      <Box height="calc(100% - 44px)">
        {timerSettings.circleTimer ? <CircleTimer /> : <SquareTimer />}
      </Box>
    </Box>
  )
}

interface TimerProps {
  timerSettings: ITimerSettings
  setTimerSettings: (newSettings: ITimerSettings) => void
}

export default Timer
