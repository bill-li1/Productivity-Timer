import { Box, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useState, useRef, useContext } from "react"
import useTimer from "easytimer-react-hook"
import SquareTimer from "./timer-display"
import TimerSelector from "./timer-selector"
import TimerButtons from "./timer-buttons"
import { SettingContext } from "../../pages"

const Timer = () => {
  const { timerSettings } = useContext(SettingContext)
  const skipFirstRender = useRef<boolean>(false)
  const [notStarted, setNotStarted] = useState<boolean>(true)
  const longBreakCounter = useRef<number>(0)
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

  const [timerType, setTimerType] = useState<string>("Pomodoro")

  useEffect(() => {
    timer.stop()
    timer.start({
      // startValues: { minutes: /* returnTime(timerType) */ 0, seconds: 3 },
      startValues: { minutes: returnTime(timerType), seconds: 0 },
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
    timerSettings.hideQuote,
  ])

  useEffect(() => {
    if (skipFirstRender.current) {
      if (timerType === "Pomodoro") {
        longBreakCounter.current++
        if (longBreakCounter.current === timerSettings.numBreaks) {
          longBreakCounter.current = 0
          setTimerType("Long Break")
        } else {
          setTimerType("Short Break")
        }
      } else {
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
      h="275px"
      mb="30px"
      p="10px"
    >
      <TimerSelector
        timer={timer}
        timerType={timerType}
        setTimerType={setTimerType}
      />
      <Box height="calc(100% - 35px)">
        <SquareTimer timeValues={timer.getTimeValues()} />
        <TimerButtons
          timer={timer}
          notStarted={notStarted}
          setNotStarted={setNotStarted}
          timerType={timerType}
          setTimerType={setTimerType}
        />
      </Box>
    </Box>
  )
}

export default Timer
