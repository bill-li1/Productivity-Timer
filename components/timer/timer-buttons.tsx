import {
  Box,
  Modal,
  Button,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react"
import { useContext, useState, useEffect } from "react"
import Timer from "easytimer.js"
import { SettingContext } from "../../pages"

const TimerButtons = (props: TimerButtonProps) => {
  const { timerSettings } = useContext(SettingContext)
  const { timer, notStarted, setNotStarted, timerType } = props
  const [timerButton, setTimerButton] = useState<string>(
    timer.isRunning() ? "Pause" : "Start",
  )
  const { isOpen, onOpen, onClose } = useDisclosure()

  const modalSubmit = () => {
    timer.reset()
    if (
      !(
        (timerType === "Pomodoro" && timerSettings.autoStartPomodoro) ||
        (timerType === "Short Break" && timerSettings.autoStartShortTimer) ||
        (timerType === "Long Break" && timerSettings.autoStartLongTimer)
      )
    ) {
      timer.pause()
      setNotStarted(true)
      setTimerButton("Start")
    } else {
      setTimerButton("Pause")
    }
    onClose()
  }

  useEffect(() => {
    if (
      !(
        (timerType === "Pomodoro" && timerSettings.autoStartPomodoro) ||
        (timerType === "Short Break" && timerSettings.autoStartShortTimer) ||
        (timerType === "Long Break" && timerSettings.autoStartLongTimer)
      )
    ) {
      setTimerButton("Start")
    } else {
      setTimerButton("Pause")
    }
  }, [timerType])
  // TODO
  // add two more buttons without text, just icons
  // ---------------------------
  // | Start | Reset | B1 | B2 |
  // ---------------------------
  // B1: Add time
  // B2: Go next
  return (
    <Box>
      <Box display="flex" border="3px solid blue">
        <Box
          border="3px solid blue"
          w="35%"
          display="flex"
          justifyContent="center"
        ></Box>
        <Box
          border="3px solid blue"
          display="flex"
          justifyContent="center"
          w="30%"
        >
          <Button
            onClick={() => {
              setNotStarted(false)
              if (timer.isRunning()) {
                timer.pause()
                setTimerButton("Start")
              } else {
                timer.start()
                setTimerButton("Pause")
              }
            }}
            w="100%"
            borderRadius="xl"
            mr="1"
            ml="1"
          >
            {timerButton}
          </Button>
        </Box>
        <Box
          border="3px solid blue"
          display="flex"
          justifyContent="center"
          w="35%"
        ></Box>
        {/*
        <Button
          disabled={notStarted}
          onClick={() => {
            onOpen()
          }}
          w="50%"
          borderRadius="xl"
          ml="1"
        >
          Reset
        </Button>
        */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>random text aha blah blah blah.</ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="solid" onClick={modalSubmit}>
                Reset
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  )
}

interface TimerButtonProps {
  timer: Timer
  notStarted: boolean
  setNotStarted: React.Dispatch<React.SetStateAction<boolean>>
  timerType: string
}

export default TimerButtons
