import Logo from "./logo"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Container,
  Box,
  Heading,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { BsGearFill } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { AiFillDatabase } from "react-icons/ai"
import Settings from "./settings/settings"
import ComingSoon from "./coming-soon"

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
        <Box flex={1} align="right">
          <IconButton
            aria-label="Reports"
            ml={3}
            icon={<AiFillDatabase size={20} />}
            variant="outline"
            bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
          />
          <IconButton
            aria-label="Settings"
            ml={3}
            onClick={onOpen}
            icon={<BsGearFill size={20} />}
            variant="outline"
            bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
          />
          <IconButton
            aria-label="Profile"
            ml={3}
            icon={<FaUserCircle size={20} />}
            variant="outline"
            bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
          />
        </Box>
        <Modal size="lg" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="34" textAlign="center">
              Settings
            </ModalHeader>
            <ModalCloseButton />
            <Settings
              onClose={onClose}
            />
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  )
}

export default Navbar
