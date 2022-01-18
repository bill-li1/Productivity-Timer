import { Box } from "@chakra-ui/react"
import { ITimerSettings } from "../../util/types"
import { useState } from "react"

const Timer = (props: TimerProps) => {
  const { timerSettings, setTimerSettings } = props
  const [timer, setTimer] = useState<string>("pomodoro")
  const returnTime = (timerType: string) => {
    switch (timerType) {
      case "pomodoro":
        return timerSettings.pomodoroTime
      case "shortBreak":
        return timerSettings.shortBreakTime
      case "longBreak":
        return timerSettings.longBreakTime
    }
  }
  const returnColor = (timerType: string) => {
    switch (timerType) {
      case "pomodoro":
        return timerSettings.pomodoroTime
      case "shortBreak":
        return timerSettings.shortBreakTime
      case "longBreak":
        return timerSettings.longBreakTime
    }
  }
  return (
    <Box border="3px solid red">
      <Box></Box>
    </Box>
  )
}

interface TimerProps {
  timerSettings: ITimerSettings
  setTimerSettings: (newSettings: ITimerSettings) => void
}

export default Timer
