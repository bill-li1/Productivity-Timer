import Logo from "./logo"
import {
  Container,
  Box,
  Heading,
  Flex,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react"
import { BsGearFill } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { AiFillDatabase } from "react-icons/ai"
import ThemeToggleButton from "./theme-toggle-button"

const Navbar = (props) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      css={{ backdropFilter: "blur(10px)" }}
      bg={useColorModeValue("#f0e7db60", "#20202360")}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <IconButton
            aria-label="Settings"
            ml={3}
            icon={<AiFillDatabase size={20} />}
            variant="outline"
            borderColor="#80808070"
            bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
          />
          <IconButton
            aria-label="Settings"
            ml={3}
            icon={<BsGearFill size={20} />}
            variant="outline"
            borderColor="#80808070"
            bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
          />
          <IconButton
            aria-label="Settings"
            ml={3}
            icon={<FaUserCircle size={20} />}
            variant="outline"
            borderColor="#80808070"
            bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
