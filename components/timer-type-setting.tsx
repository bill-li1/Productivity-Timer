import { Table, Thead, Th, Box, Button } from "@chakra-ui/react"
import { BsSquareFill, BsCircleFill } from "react-icons/bs"

const TimerTypeSetting = () => {
  return (
    <Box mt="3" mb="5">
      <Table variant="unstyled">
        <Thead>
          <Th fontSize="16" textAlign="center" w="xl" pb="20px">
            Timer Style
          </Th>
        </Thead>
      </Table>
      <Box mr="5" ml="5" mb="2" display="flex">
        <Box
          w="50%"
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <Button
            size="lg"
            aria-label="light toggle theme"
            colorScheme="blue"
            leftIcon={<BsCircleFill />}
          >
            Circle Timer
          </Button>
        </Box>
        <Box
          w="50%"
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <Button
            size="lg"
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
