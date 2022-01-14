import { Box } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { useState, useEffect, useRef } from "react"

const ThemeSetting = () => {
  const { toggleColorMode } = useColorMode()
  const [theme, setTheme] = useState<String>(useColorModeValue("light", "dark"))
  const notInitialRender = useRef(false)

  useEffect(() => {
    if (notInitialRender.current) {
      toggleColorMode()
    } else {
      notInitialRender.current = true
    }
  }, [theme])

  return (
    <Box mr="5" ml="5" mb="2" display="flex">
      <Box w="50%" onClick={() => setTheme("light")} p="4">
        <Box
          borderRadius="2xl"
          border="1px solid red"
          pt="30%"
          textAlign="center"
          height="150px"
        >
          light theme
        </Box>
      </Box>
      <Box w="50%" onClick={() => setTheme("dark")} p="4">
        <Box
          borderRadius="2xl"
          pt="30%"
          border="1px solid red"
          textAlign="center"
          height="150px"
        >
          dark theme
        </Box>
      </Box>
    </Box>
  )
}

export default ThemeSetting
