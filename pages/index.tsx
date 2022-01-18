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
    pomodoroColor: "#808080",
    shortBreakColor: "#808080",
    longBreakColor: "#808080",
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
      <Container maxW="container.sm" pt={14}>
        <Heading as="h2" variant="page-title" mb={5}>
          Rebecca's Timer
        </Heading>
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
