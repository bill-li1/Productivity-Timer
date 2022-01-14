import { Box } from "@chakra-ui/react"
import { Button, Divider, ModalFooter } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { ITimerSettings } from "../util/types"
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
      <LongBreakSettings />
      <StyledDivider />
      <ThemeSetting />
      <StyledDivider />
      <TimerTypeSetting />
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={saveButton}>
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
