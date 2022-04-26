import { useState, useContext, useEffect } from "react"
import {
  Button,
  Box,
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
import { SettingContext } from "../../pages"
import { BsGearFill } from "react-icons/bs"
import { ITempTimerSettings } from "../../util/types"
import LongBreakSettings from "./long-break-settings"
import QuoteSetting from "./quote-setting"
import TimerSettings from "./timer-setting"
import StyledDivider from "../styled-divider"
import ThemeSetting from "./theme-setting"

const SETTING_LOCAL_STORAGE_KEY = "todo-list-settings"

const Settings = () => {
  const { timerSettings, setTimerSettings } = useContext(SettingContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newTimerSettings, setNewTimerSettings] = useState<ITempTimerSettings>(
    JSON.parse(JSON.stringify(timerSettings)),
  )

  const saveButton = () => {
    setTimerSettings({
      ...newTimerSettings,
      pomodoroTime: parseInt(newTimerSettings.pomodoroTime),
      shortBreakTime: parseInt(newTimerSettings.shortBreakTime),
      longBreakTime: parseInt(newTimerSettings.longBreakTime),
      numBreaks: parseInt(newTimerSettings.numBreaks),
    })
    onClose()
  }

  const saveButtonDisabled = () => {
    return (
      newTimerSettings.pomodoroTime === "" ||
      newTimerSettings.shortBreakTime === "" ||
      newTimerSettings.longBreakTime === "" ||
      newTimerSettings.numBreaks === ""
    )
  }

  useEffect(() => {
    if (!isOpen) {
      setNewTimerSettings({
        ...timerSettings,
        pomodoroTime: timerSettings.pomodoroTime.toString(),
        shortBreakTime: newTimerSettings.shortBreakTime.toString(),
        longBreakTime: newTimerSettings.longBreakTime.toString(),
        numBreaks: newTimerSettings.numBreaks.toString(),
      })
    }
  }, [isOpen])

  useEffect(() => {
    const storageSettings = JSON.parse(localStorage.getItem(SETTING_LOCAL_STORAGE_KEY))
    if (timerSettings) {
      setTimerSettings(storageSettings)
      setNewTimerSettings(storageSettings)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(SETTING_LOCAL_STORAGE_KEY, JSON.stringify(timerSettings));
  }, [timerSettings]);

  return (
    <>
      <IconButton
        borderRadius="xl"
        aria-label="Settings"
        ml={2}
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
            <QuoteSetting
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
              <Button
                mr="1"
                colorScheme="blue"
                onClick={saveButton}
                disabled={saveButtonDisabled()}
              >
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
