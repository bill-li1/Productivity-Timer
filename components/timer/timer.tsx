import {
  Box,
  Button,
  useRadioGroup,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { ITimerSettings } from "../../util/types"
import { useState } from "react"
import TimerSelector from "./timer-selector"

const Timer = (props: TimerProps) => {
  const { timerSettings, setTimerSettings } = props
  const [timer, setTimer] = useState<string>("pomodoro")
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
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "Pomodoro",
    onChange: (value) => {
      console.log(value)
    },
  })
  const options = ["Pomodoro", "Short Break", "Long Break"]
  const group = getRootProps()
  return (
    <Box
      bgColor={useColorModeValue("#E6D7C4", "#B69F8A")}
      borderRadius="20px"
      h="300"
      mb="30"
      p="10px"
    >
      <HStack
        {...group}
        display="flex"
        justifyContent="center"
        borderRadius="15px"
        h="44px"
        bgColor={useColorModeValue("#F0E7DB", "#202023")}
        pl="3"
        pr="3"
      >
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <TimerSelector key={value} color={returnColor(value)} {...radio}>
              {value}
            </TimerSelector>
          )
        })}
      </HStack>
    </Box>
  )
}

interface TimerProps {
  timerSettings: ITimerSettings
  setTimerSettings: (newSettings: ITimerSettings) => void
}

export default Timer
