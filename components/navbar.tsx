import Logo from "./logo"
import {
  Spacer,
  Container,
  Box,
  Heading,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaUserCircle } from "react-icons/fa"
import Information from "./information"
import Settings from "./settings/settings"
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
        borderBottom="1px solid gray"
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
          <IconButton
            borderRadius="xl"
            aria-label="Profile"
            ml={3}
            icon={<FaUserCircle size={20} />}
            variant="outline"
            bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
          />
        </Box>
      </Container >
    </Box >
  )
}

export default Navbar
