import { Container, Box } from "@chakra-ui/react"
import { useState, createContext } from "react"
import Navbar from "../components/navbar"
import Quote from "../components/quotes"
import { ITimerSettings, ITimerContext } from "../util/types"
import Timer from "../components/timer/timer"

export const SettingContext = createContext<ITimerContext | null>(null)

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
    <SettingContext.Provider value={{ timerSettings, setTimerSettings }}>
      <Box>
        <Navbar />
        <Container maxW="xl" mt={10}>
          <Timer />
          <Quote />
        </Container>
      </Box>
    </SettingContext.Provider>
  )
}

export default Page
