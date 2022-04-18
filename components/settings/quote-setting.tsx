import {
  Switch,
  Box,
  Tooltip,
} from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons"
import { TimerSettingProps } from "../../util/types"

const QuoteSetting = (props: TimerSettingProps) => {
  const { timerSettings, setTimerSettings } = props
  return (
    <Box display="flex" justifyContent="center">
      <Box p="4" pl="9" pr="10" display="flex" mb="2" w="90%">
        <Box w="75%" display="flex">
          <Box pt="8px">Hide Inspirational Quote</Box>
          <Box ml="3" pt="6px">
            <Tooltip
              pb="2"
              pl="4"
              pr="4"
              pt="2"
              textAlign="center"
              label="If toggled inspirational quote will no longer be displayed"
            >
              <InfoIcon />
            </Tooltip>
          </Box>
        </Box>
        <Box w="25%" pt={2} display="flex" justifyContent="center">
          <Switch
            size="lg"
            isChecked={timerSettings.hideQuote}
            onChange={(val) => {
              setTimerSettings({
                ...timerSettings,
                hideQuote: val.currentTarget.checked,
              })
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default QuoteSetting
