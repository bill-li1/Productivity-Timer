import { TimerSettingProps } from "../util/types"
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Switch,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

const ThemeSetting = (props: TimerSettingProps) => {
  const { timerSettings, setTimerSettings } = props
  return (
    <Box display="flex" pl="10px" mb="2">
      <Table variant="unstyled">
        <Thead>
          <Tr>
            <Th fontSize="14">Timers</Th>
            <Th fontSize="14" pr="0" pl="10" textAlign="center">
              Duration
            </Th>
            <Th fontSize="14" textAlign="center">
              Automatically Start
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Pomdoro</Td>
            <Td pr="0" pl="10">
              <NumberInput
                w="100px"
                value={timerSettings.pomdoroTime}
                onChange={(_, num) => {
                  setTimerSettings({
                    ...timerSettings,
                    pomdoroTime: num,
                  })
                }}
                max={999}
                min={0}
                keepWithinRange={true}
                size="md"
                clampValueOnBlur={false}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Td>
            <Td
              display="flex"
              justifyContent="center"
              mr="15"
              pt="6"
              pb="0"
              pl="10"
            >
              <Switch
                size="lg"
                checked={timerSettings.autoStartPomdoro}
                onChange={(val) => {
                  setTimerSettings({
                    ...timerSettings,
                    autoStartPomdoro: val.currentTarget.checked,
                  })
                }}
              />
            </Td>
          </Tr>
          <Tr>
            <Td pr="0">Short Break</Td>
            <Td pr="0" pl="10">
              <NumberInput
                w="100px"
                value={timerSettings.shortBreakTime}
                onChange={(_, num) => {
                  setTimerSettings({
                    ...timerSettings,
                    shortBreakTime: num,
                  })
                }}
                max={999}
                min={0}
                keepWithinRange={true}
                size="md"
                clampValueOnBlur={false}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Td>
            <Td
              display="flex"
              justifyContent="center"
              mr="15"
              pt="6"
              pb="0"
              pl="10"
            >
              <Switch
                size="lg"
                checked={timerSettings.autoStartShortTimer}
                onChange={(val) => {
                  setTimerSettings({
                    ...timerSettings,
                    autoStartShortTimer: val.currentTarget.checked,
                  })
                }}
              />
            </Td>
          </Tr>
          <Tr>
            <Td pr="0">Long Break</Td>
            <Td pr="0" pl="10">
              <NumberInput
                w="100px"
                value={timerSettings.longBreaktime}
                onChange={(_, num) => {
                  setTimerSettings({
                    ...timerSettings,
                    longBreaktime: num,
                  })
                }}
                max={999}
                min={0}
                keepWithinRange={true}
                size="md"
                clampValueOnBlur={false}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Td>
            <Td
              display="flex"
              justifyContent="center"
              mr="15"
              pt="6"
              pl="8"
              pb="0"
            >
              <Switch
                size="lg"
                checked={timerSettings.autoStartLongTimer}
                onChange={(val) => {
                  setTimerSettings({
                    ...timerSettings,
                    autoStartLongTimer: val.currentTarget.checked,
                  })
                }}
              />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default ThemeSetting
