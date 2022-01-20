import {
  Table,
  Thead,
  Th,
  Box,
  Button,
  LightMode,
  DarkMode,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { useState, useEffect, useRef } from "react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const TimerTypeSetting = () => {
  const { toggleColorMode } = useColorMode()
  const [theme, setTheme] = useState<string>(useColorModeValue("light", "dark"))
  const notInitialRender = useRef(false)

  useEffect(() => {
    if (notInitialRender.current) {
      toggleColorMode()
    } else {
      notInitialRender.current = true
    }
  }, [theme])

  return (
    <Box mt="3" mb="6">
      <Table variant="unstyled">
        <Thead>
          <Th fontSize="16" textAlign="center" w="xl" pb="20px">
            Theme
          </Th>
        </Thead>
      </Table>
      <Box mr="5" ml="5" mb="2" display="flex">
        <Box
          mr="3"
          w="50%"
          display="flex"
          justifyContent="right"
          alignContent="center"
        >
          <DarkMode>
            <Button
              size="lg"
              onClick={() => setTheme("light")}
              aria-label="light toggle theme"
              colorScheme="orange"
              leftIcon={<SunIcon />}
            >
              Light Theme
            </Button>
          </DarkMode>
        </Box>
        <Box
          ml="3"
          w="50%"
          display="flex"
          justifyContent="left"
          alignContent="center"
        >
          <LightMode>
            <Button
              size="lg"
              onClick={() => setTheme("dark")}
              aria-label="light toggle theme"
              colorScheme="purple"
              leftIcon={<MoonIcon />}
            >
              Dark Theme
            </Button>
          </LightMode>
        </Box>
      </Box>
    </Box>
  )
}

export default TimerTypeSetting
