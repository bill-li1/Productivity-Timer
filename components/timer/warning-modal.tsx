import {
  Box,
  Button,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react"

const WarningModal = (props: WarningModalProps) => {
  const { onClose, modalSubmit } = props
  return (
    <Box border="3px solid red">
      <ModalOverlay />
      <ModalContent>
      </ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>random text aha blah blah blah.</ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant="solid" onClick={modalSubmit}>Reset</Button>
      </ModalFooter>
    </Box>
  )
}

interface WarningModalProps {
  onClose: () => void
  modalSubmit: () => void
}

export default WarningModal
