import { Box } from "@chakra-ui/react"

const TimerTypeSetting = () => {
  return (
    <Box mr="5" ml="5" mb="2" display="flex">
      <Box w="50%" p="4">
        <Box
          borderRadius="2xl"
          border="1px solid red"
          pt="30%"
          textAlign="center"
          height="150px"
        >
          Circle Timer
        </Box>
      </Box>
      <Box w="50%" p="4">
        <Box
          borderRadius="2xl"
          pt="30%"
          border="1px solid red"
          textAlign="center"
          height="150px"
        >
          Square Timer
        </Box>
      </Box>
    </Box>
  )
}

export default TimerTypeSetting
