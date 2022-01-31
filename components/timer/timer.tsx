import { Box, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useState, useRef, useContext } from "react"
import useTimer from "easytimer-react-hook"
import CircleTimer from "./circle-timer"
import SquareTimer from "./square-timer"
import TimerSelector from "./timer-selector"
import TimerButtons from "./timer-buttons"
import { SettingContext } from "../../pages"

const Timer = () => {
  const { timerSettings } = useContext(SettingContext)
  const skipFirstRender = useRef<boolean>(false)
  const [notStarted, setNotStarted] = useState<boolean>(true)
  const [timer, isTargetAchieved] = useTimer({ updateWhenTargetAchieved: true })

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

  const [timerType, setTimerType] = useState<string>("Pomodoro")

  useEffect(() => {
    timer.stop()
    timer.start({
      startValues: { minutes: /* returnTime(timerType) */ 0, seconds: 3 },
      // startValues: { minutes: returnTime(timerType), seconds: 0 },
      target: { minutes: 0, seconds: 0 },
      countdown: true,
    })
    if (
      !(
        (timerType === "Pomodoro" && timerSettings.autoStartPomodoro) ||
        (timerType === "Short Break" && timerSettings.autoStartShortTimer) ||
        (timerType === "Long Break" && timerSettings.autoStartLongTimer)
      )
    ) {
      timer.pause()
      setNotStarted(true)
    }
  }, [
    timerType,
    timerSettings.pomodoroTime,
    timerSettings.shortBreakTime,
    timerSettings.longBreakTime,
    timerSettings.numBreaks,
    timerSettings.circleTimer,
  ])

  useEffect(() => {
    if (skipFirstRender.current) {
      if (timerType === "Pomodoro") {
        setTimerType("Short Break")
      } else if (timerType === "Short Break") {
        setTimerType("Long Break")
      } else if (timerType === "Long Break") {
        setTimerType("Pomodoro")
      }
      skipFirstRender.current = false
    } else {
      skipFirstRender.current = true
    }
  }, [isTargetAchieved])

  return (
    <Box
      bgColor={useColorModeValue("#E6D7C4", "#3E3E43")}
      borderRadius="20px"
      h="300"
      mb="30"
      p="10px"
    >
      <TimerSelector
        timer={timer}
        timerType={timerType}
        setTimerType={setTimerType}
      />
      <Box height="calc(100% - 44px)">
        {timerSettings.circleTimer ? (
          <CircleTimer
            timeValues={timer.getTimeValues()}
            color={returnColor(timerType)}
          />
        ) : (
          <SquareTimer
            timeValues={timer.getTimeValues()}
            color={returnColor(timerType)}
          />
        )}
        <TimerButtons
          timer={timer}
          notStarted={notStarted}
          setNotStarted={setNotStarted}
          timerType={timerType}
        />
      </Box>
    </Box>
  )
}

export default Timer
