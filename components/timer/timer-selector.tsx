import {
  Box,
  HStack,
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react"
import { useRef, useContext, useEffect } from "react"
import Timer from "easytimer.js"
import { SettingContext } from "../../pages"

const TimerSelector = (props: TimerSelectorProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { timerSettings } = useContext(SettingContext)
  const { timerType, setTimerType, timer } = props
  const tempTimer = useRef<string>(timerType)
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

  useEffect(() => {
    tempTimer.current = timerType
  }, [timerType])

  const modalSubmit = () => {
    setTimerType(tempTimer.current)
    onClose()
  }

  const modalClose = () => {
    tempTimer.current = timerType
    onClose()
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
          onClick={() => {
            if (tempTimer.current !== "Pomodoro") {
              tempTimer.current = "Pomodoro"
              if (timer.isRunning()) {
                onOpen()
              } else {
                setTimerType("Pomodoro")
              }
            }
          }}
          color={
            timerType === "Pomodoro"
              ? "white"
              : useColorModeValue("black", "white")
          }
          borderRadius="10px"
          bg={timerType === "Pomodoro" ? returnColor("Pomodoro") : ""}
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
          onClick={() => {
            if (tempTimer.current !== "Short Break") {
              tempTimer.current = "Short Break"
              if (timer.isRunning()) {
                onOpen()
              } else {
                setTimerType("Short Break")
              }
            }
          }}
          color={
            timerType === "Short Break"
              ? "white"
              : useColorModeValue("black", "white")
          }
          borderRadius="10px"
          bg={timerType === "Short Break" ? returnColor("Short Break") : ""}
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
          onClick={() => {
            if (tempTimer.current !== "Long Break") {
              tempTimer.current = "Long Break"
              if (timer.isRunning()) {
                onOpen()
              } else {
                setTimerType("Long Break")
              }
            }
          }}
          color={
            timerType === "Long Break"
              ? "white"
              : useColorModeValue("black", "white")
          }
          borderRadius="10px"
          bg={timerType === "Long Break" ? returnColor("Long Break") : ""}
        >
          Long Break
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>random text aha blah blah blah.</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={modalClose}>
              Close
            </Button>
            <Button variant="solid" onClick={modalSubmit}>
              Reset
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  )
}

interface TimerSelectorProps {
  timer: Timer
  timerType: string
  setTimerType: React.Dispatch<React.SetStateAction<string>>
}

export default TimerSelector
