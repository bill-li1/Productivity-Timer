import { Box, useColorModeValue } from "@chakra-ui/react"
import { ITimerSettings } from "../../util/types"
import { useEffect, useState, useRef } from "react"
import useTimer from "easytimer-react-hook"
import CircleTimer from "./circle-timer"
import SquareTimer from "./square-timer"
import TimerSelector from "./timer-selector"
import TimerButtons from "./timer-buttons"

const Timer = (props: TimerProps) => {
  const { timerSettings } = props
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
      startValues: { minutes: 0/* returnTime(timerType) */, seconds: 5 },
      target: { minutes: 0, seconds: 0 },
      countdown: true,
    })
    timer.pause()
    setNotStarted(true)
  }, [timerType, timerSettings])

  //TODO
  // eventually we will move everything to context? idk maybe
  // IF AUTO START THEN AUTO START
  // IF NOT AUTO START DO NOT AUTO START THINGS (RESET TIMER)
  useEffect(() => {
    if (skipFirstRender.current) {
      if (timerType === "Pomodoro") {
        if (timerSettings.autoStartShortTimer) {
          setTimerType("Short Break")
          console.log("hi")
        } else {
          setTimerType("Short Break")
        }
      } else if (timerType === "Short Break") {
        if (timerSettings.autoStartShortTimer) {
          setTimerType("Short Break")
        } else {
          setTimerType("Short Break")
        }
      } else if (timerType === "Long Break") {
        if (timerSettings.autoStartShortTimer) {
          setTimerType("Short Break")
        } else {
          setTimerType("Short Break")
        }
      }
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
        timerSettings={timerSettings}
        timer={timer}
        timerType={timerType}
        setTimerType={setTimerType}
      />
      <Box height="calc(100% - 44px)">
        {/*console.log(timerSettings)*/}
        {
          timerSettings.circleTimer ? (
            <CircleTimer
              timeValues={timer.getTimeValues()}
              color={returnColor(timerType)}
            />
          ) : (
            <SquareTimer
              timeValues={timer.getTimeValues()}
              color={returnColor(timerType)}
            />
          )
        }
        < TimerButtons
          timer={timer}
          notStarted={notStarted}
          setNotStarted={setNotStarted}
        />
      </Box>
    </Box>
  )
}

interface TimerProps {
  timerSettings: ITimerSettings
}

export default Timer
