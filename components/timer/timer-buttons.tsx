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
import Timer from "easytimer.js"

const TimerButtons = (props: TimerButtonProps) => {
  const { timer, notStarted, setNotStarted } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const modalSubmit = () => {
    timer.reset()
    timer.pause()
    setNotStarted(true)
    onClose()
  }
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Button
          onClick={() => {
            setNotStarted(false)
            if (timer.isRunning()) {
              timer.pause()
            } else {
              timer.start()
            }
          }}
          w="50%"
          borderRadius="xl"
          mr="1"
        >
          {timer.isPaused() ? "Start" : "Pause"}
        </Button>
        <Button
          disabled={notStarted}
          onClick={() => {
            if (timer.isRunning()) {
              onOpen()
            } else {
              timer.reset()
              timer.pause()
            }
          }}
          w="50%"
          borderRadius="xl"
          ml="1"
        >
          Reset
        </Button>
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
}

export default TimerButtons
