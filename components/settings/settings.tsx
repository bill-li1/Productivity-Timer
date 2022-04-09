import { Box } from "@chakra-ui/react"
import {
  Button,
  Divider,
  ModalFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react"
import { useState, useContext } from "react"
import { ITimerSettings } from "../../util/types"
import ThemeSetting from "./theme-setting"
import { BsGearFill } from "react-icons/bs"
import TimerTypeSetting from "./timer-type-setting"
import LongBreakSettings from "./long-break-settings"
import TimerSettings from "./timer-setting"
import { SettingContext } from "../../pages"

const StyledDivider = () => {
  return (
    <Box ml="5" mr="5" mb="2">
      <Divider />
    </Box>
  )
}

const Settings = () => {
  const { timerSettings, setTimerSettings } = useContext(SettingContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newTimerSettings, setNewTimerSettings] = useState<ITimerSettings>(
    JSON.parse(JSON.stringify(timerSettings)),
  )

  const saveButton = () => {
    setTimerSettings(newTimerSettings)
    onClose()
  }

  return (
    <>
      <IconButton
        borderRadius="xl"
        aria-label="Settings"
        ml={3}
        onClick={onOpen}
        icon={<BsGearFill size={20} />}
        variant="outline"
        bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
      />
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="34" textAlign="center">
            Settings
          </ModalHeader>
          <ModalCloseButton />
          <Box>
            <StyledDivider />
            <TimerSettings
              timerSettings={newTimerSettings}
              setTimerSettings={setNewTimerSettings}
            />
            <StyledDivider />
            <LongBreakSettings
              timerSettings={newTimerSettings}
              setTimerSettings={setNewTimerSettings}
            />
            <StyledDivider />
            <ThemeSetting />
            <StyledDivider />
            <TimerTypeSetting
              timerSettings={newTimerSettings}
              setTimerSettings={setNewTimerSettings}
            />
            <ModalFooter mr="8">
              <Button
                mr="3"
                _hover={{}}
                onClick={onClose}
                bg={useColorModeValue("#808080", "#A9A9A9")}
                textColor={useColorModeValue("white", "black")}
              >
                Cancel
              </Button>
              <Button mr="1" colorScheme="blue" onClick={saveButton}>
                Save
              </Button>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Settings
