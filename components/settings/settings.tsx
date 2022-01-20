import { Box } from "@chakra-ui/react"
import {
  Button,
  Divider,
  ModalFooter,
  useColorModeValue,
} from "@chakra-ui/react"
import { useState } from "react"
import { ITimerSettings } from "../../util/types"
import ThemeSetting from "./theme-setting"
import TimerTypeSetting from "./timer-type-setting"
import LongBreakSettings from "./long-break-settings"
import TimerSettings from "./timer-setting"

const StyledDivider = () => {
  return (
    <Box ml="5" mr="5" mb="2">
      <Divider />
    </Box>
  )
}

const Settings = (props: SettingsProps) => {
  const { timerSettings, setTimerSettings, onClose } = props
  const [newTimerSettings, setNewTimerSettings] = useState<ITimerSettings>(
    JSON.parse(JSON.stringify(timerSettings)),
  )

  const saveButton = () => {
    setTimerSettings(newTimerSettings)
    onClose()
  }

  return (
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
  )
}

interface SettingsProps {
  timerSettings: ITimerSettings
  setTimerSettings: (newSettings: ITimerSettings) => void
  onClose: () => void
}

export default Settings
