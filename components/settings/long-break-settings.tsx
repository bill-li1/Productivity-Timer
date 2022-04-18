import {
  NumberInput,
  Spacer,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Tooltip,
} from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons"
import { TimerSettingProps } from "../../util/types"

const LongBreakSetting = (props: TimerSettingProps) => {
  const { timerSettings, setTimerSettings } = props
  return (
    <Box display="flex" justifyContent="center">
      <Box p="4" pl="9" pr="10" display="flex" mb="2" w="90%">
        <Box w="75%" display="flex">
          <Box pt="8px">Long Break Interval</Box>
          <Box ml="3" pt="6px">
            <Tooltip
              pb="2"
              pl="4"
              pr="4"
              pt="2"
              textAlign="center"
              label="Number of intervals before a long break. Each interval consists of a work period and a short break."
            >
              <InfoIcon />
            </Tooltip>
          </Box>
        </Box>
        <Box w="22%" ml="2">
          <NumberInput
            value={timerSettings.numBreaks}
            onChange={(_, num) => {
              setTimerSettings({
                ...timerSettings,
                numBreaks: num > 0 ? num : 0,
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
        </Box>
      </Box>
    </Box>
  )
}

export default LongBreakSetting
