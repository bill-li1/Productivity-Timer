import {
  Box,
  Fade,
  IconButton,
  Modal,
  Button,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import React, { useContext, useState, useEffect, useRef } from "react"
import Timer from "easytimer.js"
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipEndFill,
} from "react-icons/bs"
import { VscDebugRestart } from "react-icons/vsc"
import { SettingContext } from "../../pages"

const TimerButtons = (props: TimerButtonProps) => {
  const { timerSettings } = useContext(SettingContext)
  const { timer, notStarted, setNotStarted, timerType, setTimerType } = props
  const latest = useRef<string>("restart")
  const [timerButton, setTimerButton] = useState<string>(
    timer.isRunning() ? "Pause" : "Start",
  )
  const { isOpen, onOpen, onClose } = useDisclosure()

  const modalSubmit = () => {
    if (latest.current === "restart") {
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
    } else {
      if (timerType === "Pomodoro") {
        setTimerType("Short Break")
      } else if (timerType === "Short Break") {
        setTimerType("Long Break")
      } else if (timerType === "Long Break") {
        setTimerType("Pomodoro")
      }
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

  useEffect(() => {
    setTimerButton(timer.isRunning() ? "Pause" : "Start")
  }, [timer.isRunning(), timer.isPaused()])

  return (
    <Box display="flex" justifyContent="center">
      <Fade in={!notStarted}>
        <IconButton
          disabled={notStarted}
          onClick={() => {
            latest.current = "restart"
            onOpen()
          }}
          icon={<VscDebugRestart />}
          aria-label="reset"
          borderRadius="500"
        />
      </Fade>
      <Button
        w="25%"
        ml="2"
        mr="2"
        leftIcon={
          timerButton == "Start" ? (
            <BsFillPlayCircleFill />
          ) : (
            <BsFillPauseCircleFill />
          )
        }
        _focus={{
          outline: "none",
        }}
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
        borderRadius="xl"
      >
        {timerButton}
      </Button>
      <Fade in={!notStarted}>
        <IconButton
          disabled={notStarted}
          onClick={() => {
            latest.current = "skip"
            onOpen()
          }}
          icon={<BsFillSkipEndFill />}
          aria-label="reset"
          borderRadius="500"
        />
      </Fade>
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
  )
}

interface TimerButtonProps {
  timer: Timer
  notStarted: boolean
  setNotStarted: React.Dispatch<React.SetStateAction<boolean>>
  timerType: string
  setTimerType: React.Dispatch<React.SetStateAction<string>>
}

export default TimerButtons
