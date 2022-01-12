import { Container, Box, Heading } from "@chakra-ui/react"
import { useState } from "react"
import Navbar from "../components/navbar"
import Quote from "../components/quotes"
import { ITimerSettings } from "../util/types"
import SquareTimer from "../components/square-timer"
import CircleTimer from "../components/circle-timer"

const Page = () => {
  const initialTimerSettings: ITimerSettings = {
    pomdoroTime: 45,
    shortBreakTime: 5,
    longBreaktime: 10,
    numBreaks: 3,
    autoStartPomdoro: false,
    autoStartShortTimer: false,
    autoStartLongTimer: false,
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
        <CircleTimer timerSettings={timerSettings} />
        <SquareTimer timerSettings={timerSettings} />
        <Quote />
      </Container>
    </Box>
  )
}

export default Page
