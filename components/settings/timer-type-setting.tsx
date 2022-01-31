import { Table, Thead, Th, Tr, Box, Button } from "@chakra-ui/react"
import { BsSquareFill, BsCircleFill } from "react-icons/bs"
import { TimerSettingProps } from "../../util/types"
import { useState, useEffect } from "react"

const TimerTypeSetting = (props: TimerSettingProps) => {
  const { timerSettings, setTimerSettings } = props
  const [timerType, setTimerType] = useState<string>(
    timerSettings.circleTimer ? "circle" : "square",
  )

  useEffect(() => {
    setTimerSettings({ ...timerSettings, circleTimer: timerType === "circle" })
  }, [timerType])

  return (
    <Box mt="3" mb="5">
      <Table variant="unstyled">
        <Thead>
          <Tr>
            <Th fontSize="16" textAlign="center" w="xl" pb="20px">
              Timer Style
            </Th>
          </Tr>
        </Thead>
      </Table>
      <Box mr="5" ml="5" mb="2" display="flex">
        <Box
          w="50%"
          mr="3"
          display="flex"
          justifyContent="right"
          alignContent="center"
        >
          <Button
            size="lg"
            onClick={() => setTimerType("circle")}
            aria-label="light toggle theme"
            colorScheme="blue"
            leftIcon={<BsCircleFill />}
          >
            Circle Timer
          </Button>
        </Box>
        <Box
          w="50%"
          ml="3"
          display="flex"
          justifyContent="left"
          alignContent="center"
        >
          <Button
            size="lg"
            onClick={() => setTimerType("square")}
            aria-label="light toggle theme"
            colorScheme="blue"
            leftIcon={<BsSquareFill />}
          >
            Square Timer
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default TimerTypeSetting
