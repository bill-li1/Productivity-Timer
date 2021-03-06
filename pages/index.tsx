import { Container, Box } from "@chakra-ui/react"
import { useState, createContext } from "react"
import { ITimerSettings, ITimerContext } from "../util/types"
import Navbar from "../components/navbar/navbar"
import Quote from "../components/quotes"
import Timer from "../components/timer/timer"
import TodoList from "../components/todo-list/todo-list"

export const SettingContext = createContext<ITimerContext | null>(null)

const Page = () => {
  const initialTimerSettings: ITimerSettings = {
    pomodoroTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    numBreaks: 3,
    autoStartPomodoro: false,
    autoStartShortTimer: false,
    autoStartLongTimer: false,
    pomodoroColor: "#F44336",
    shortBreakColor: "#64B5F6",
    longBreakColor: "#1565C0",
    hideQuote: false,
  }

  const [timerSettings, setTimerSettings] =
    useState<ITimerSettings>(initialTimerSettings)

  return (
    <SettingContext.Provider value={{ timerSettings, setTimerSettings }}>
      <Box>
        <Navbar />
        <Container maxW="xl" mt={8}>
          <Timer />
          {timerSettings.hideQuote ? null : <Quote />}
          <TodoList />
        </Container>
      </Box>
    </SettingContext.Provider >
  )
}

export default Page
