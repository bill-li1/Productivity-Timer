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
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { BsGearFill } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { AiFillDatabase } from "react-icons/ai"
import Settings from "./settings/settings"
import { ITimerSettings } from "../util/types"

const Navbar = (props: NavProps) => {
  const { timerSettings, setTimerSettings } = props
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
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
            onClick={onOpen}
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
        <Modal size="lg" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="34" textAlign="center">
              Settings
            </ModalHeader>
            <ModalCloseButton />
            <Settings
              timerSettings={timerSettings}
              setTimerSettings={setTimerSettings}
              onClose={onClose}
            />
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  )
}

interface NavProps {
  timerSettings: ITimerSettings
  setTimerSettings: (newSettings: ITimerSettings) => void
}

export default Navbar
