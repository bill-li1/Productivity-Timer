import { Text, Box, useColorModeValue } from "@chakra-ui/react"
import { BsAlarmFill } from "react-icons/bs"

const Logo = () => {
  return (
    <Box className="Logo">
      <BsAlarmFill className="LogoIcon" />
      <Text
        color={useColorModeValue("gray.800", "whiteAlpha.900")}
        fontFamily="M PLUS Rounded 1c"
        fontWeight="bold"
        letterSpacing={0.25}
        ml={1.5}
      >
        Productivity Timer
      </Text>
    </Box>
  )
}

export default Logo
