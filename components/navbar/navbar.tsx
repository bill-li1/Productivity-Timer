import Logo from "./logo"
import {
  Spacer,
  Container,
  Box,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react"
import Information from "./information"
import Settings from "../settings/settings"
import Profile from "./profile"
// import ComingSoon from "./coming-soon"

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
        pt={2}
        pb={2}
        pl={0}
        maxW="container.sm"
      >
        <Heading
          position="absolute"
          pt="6px"
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
      </Container >
    </Box >
  )
}

export default Navbar
