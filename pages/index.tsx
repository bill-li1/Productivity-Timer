import { Container, Box, Heading } from "@chakra-ui/react"
import { useState } from "react"
import Navbar from "../components/navbar"
import Quote from "../components/quotes"
import { ITimerSettings } from "../util/types"
import Timer from "../components/timer/timer"

const Page = () => {
  const initialTimerSettings: ITimerSettings = {
    pomodoroTime: 45,
    shortBreakTime: 5,
    longBreakTime: 10,
    numBreaks: 3,
    autoStartPomodoro: false,
    autoStartShortTimer: false,
    autoStartLongTimer: false,
    pomodoroColor: "#F44336",
    shortBreakColor: "#64B5F6",
    longBreakColor: "#1565C0",
    circleTimer: false,
  }

  const [timerSettings, setTimerSettings] =
    useState<ITimerSettings>(initialTimerSettings)

  return (
    <Box>
      <Navbar
        timerSettings={timerSettings}
        setTimerSettings={setTimerSettings}
      />
      <Container maxW="xl" pt={20}>
        <Timer
          timerSettings={timerSettings}
          setTimerSettings={setTimerSettings}
        />
        <Quote />
      </Container>
    </Box>
  )
}

export default Page
