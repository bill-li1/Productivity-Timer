import { Box, HStack, useColorModeValue, Button } from "@chakra-ui/react"
import { ITimerSettings } from "../../util/types"
import { useState } from "react"

const TimerSelector = (props: TimerSelectorProps) => {
  const { timerSettings } = props
  const [timer, setTimer] = useState<string>("Pomodoro")
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
    <HStack
      display="flex"
      justifyContent="center"
      borderRadius="15px"
      h="44px"
      bgColor={useColorModeValue("#F0E7DB", "#202023")}
      pl="3"
      pr="3"
    >
      <Box as="label" w="33%" pt="2" pb="2" h="100%">
        <Button
          _focus={{
            outline: 0,
          }}
          _hover={{
            bg: `${returnColor("Pomodoro")}80`,
          }}
          fontSize="16px"
          display="flex"
          justifyContent="center"
          pt="2px"
          w="100%"
          h="100%"
          onClick={() => setTimer("Pomodoro")}
          color={
            timer === "Pomodoro" ? "white" : useColorModeValue("black", "white")
          }
          borderRadius="10px"
          bg={timer === "Pomodoro" ? returnColor("Pomodoro") : ""}
        >
          Pomodoro
        </Button>
      </Box>
      <Box as="label" w="33%" pt="2" pb="2" h="100%">
        <Button
          _focus={{
            outline: 0,
          }}
          _hover={{
            bg: `${returnColor("Short Break")}80`,
          }}
          fontSize="16px"
          display="flex"
          justifyContent="center"
          pt="2px"
          w="100%"
          h="100%"
          onClick={() => setTimer("Short Break")}
          color={
            timer === "Short Break"
              ? "white"
              : useColorModeValue("black", "white")
          }
          borderRadius="10px"
          bg={timer === "Short Break" ? returnColor("Short Break") : ""}
        >
          Short Break
        </Button>
      </Box>
      <Box as="label" w="33%" pt="2" pb="2" h="100%">
        <Button
          _focus={{
            outline: 0,
          }}
          _hover={{
            bg: `${returnColor("Long Break")}80`,
            color: "white",
          }}
          fontSize="16px"
          display="flex"
          justifyContent="center"
          pt="2px"
          w="100%"
          h="100%"
          onClick={() => setTimer("Long Break")}
          color={
            timer === "Long Break"
              ? "white"
              : useColorModeValue("black", "white")
          }
          borderRadius="10px"
          bg={timer === "Long Break" ? returnColor("Long Break") : ""}
        >
          Long Break
        </Button>
      </Box>
    </HStack>
  )
}

interface TimerSelectorProps {
  timerSettings: ITimerSettings
}

export default TimerSelector
