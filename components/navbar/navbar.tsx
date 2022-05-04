import {
  Spacer,
  Container,
  Box,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react"
import Logo from "./logo"
import Information from "./information"
import Settings from "../settings/settings"
import Profile from "./profile"

const Navbar = () => {
  return (
    <Box
      as="nav"
      left="0"
      right="0"
      bg={useColorModeValue("#f0e7db", "#20202360")}
      zIndex={1}
    >
      <Container
        display="flex"
        borderBottom="1.25px solid gray"
        pt="5px"
        pb="5px"
        pl={0}
        maxW="container.sm"
      >
        <Heading
          position="absolute"
          pt="2px"
          as="h1"
          size="lg"
          letterSpacing={"tighter"}
        >
          <Logo />
        </Heading>
        <Spacer />
        <Box>
          <Information />
          <Settings />
          <Profile />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
