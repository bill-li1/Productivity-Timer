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
import { TimerSettingProps } from "../../util/types"
import { useState, useEffect } from "react"
import ColorSelector from "./color-selector"

const TimerSetting = (props: TimerSettingProps) => {
  const { timerSettings, setTimerSettings } = props

  const [pomodoroColor, setPomodoroTimer] = useState<string>(
    timerSettings.pomodoroColor,
  )

  const [shortBreakColor, setShortBreakColor] = useState<string>(
    timerSettings.shortBreakColor,
  )

  const [longBreakColor, setLongBreakColor] = useState<string>(
    timerSettings.longBreakColor,
  )

  useEffect(() => {
    setTimerSettings({
      ...timerSettings,
      pomodoroColor: pomodoroColor,
      shortBreakColor: shortBreakColor,
      longBreakColor: longBreakColor,
    })
  }, [pomodoroColor, shortBreakColor, longBreakColor])

  return (
    <Box display="flex" pl="10px" pr="10px" mb="2">
      <Table variant="unstyled">
        <Thead>
          <Tr>
            <Th fontSize="14">Timers</Th>
            <Th fontSize="14" textAlign="center">
              Duration
            </Th>
            <Th ml="10" fontSize="14" textAlign="center" pl="6">
              Color
            </Th>
            <Th fontSize="12" textAlign="center" pl="1">
              Automatically Start
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Pomodoro</Td>
            <Td>
              <NumberInput
                w="85px"
                value={timerSettings.pomodoroTime}
                onChange={(num) => {
                  setTimerSettings({
                    ...timerSettings,
                    pomodoroTime: num,
                  })
                }}
                max={999}
                step={5}
                min={1}
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
            <Td pl="6">
              <ColorSelector
                color={pomodoroColor}
                setColor={setPomodoroTimer}
              />
            </Td>
            <Td pl="40px">
              <Switch
                size="lg"
                isChecked={timerSettings.autoStartPomodoro}
                onChange={(val) => {
                  setTimerSettings({
                    ...timerSettings,
                    autoStartPomodoro: val.currentTarget.checked,
                  })
                }}
              />
            </Td>
          </Tr>
          <Tr>
            <Td pr="0">Short Break</Td>
            <Td>
              <NumberInput
                w="85px"
                value={timerSettings.shortBreakTime}
                onChange={(num) => {
                  setTimerSettings({
                    ...timerSettings,
                    shortBreakTime: num,
                  })
                }}
                max={999}
                min={1}
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
            <Td pl="6">
              <ColorSelector
                color={shortBreakColor}
                setColor={setShortBreakColor}
              />
            </Td>
            <Td pl="40px">
              <Switch
                size="lg"
                isChecked={timerSettings.autoStartShortTimer}
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
            <Td>
              <NumberInput
                w="85px"
                value={timerSettings.longBreakTime}
                onChange={(num) => {
                  setTimerSettings({
                    ...timerSettings,
                    longBreakTime: num,
                  })
                }}
                max={999}
                min={1}
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
            <Td pl="6">
              <ColorSelector
                color={longBreakColor}
                setColor={setLongBreakColor}
              />
            </Td>
            <Td pl="40px">
              <Switch
                size="lg"
                isChecked={timerSettings.autoStartLongTimer}
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

export default TimerSetting
