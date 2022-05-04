import {
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  IconButton,
  Box,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaUserCircle } from "react-icons/fa"
import StyledDivider from "../styled-divider"
import styled from "@emotion/styled"

const Paragraph = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
`

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        borderRadius="xl"
        aria-label="Profile"
        ml={2}
        icon={<FaUserCircle size={20} />}
        onClick={onOpen}
        variant="outline"
        bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
      />
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="34" textAlign="center">
            Coming Soon!
          </ModalHeader>
          <ModalCloseButton />
          <Box pb={4}>
            <StyledDivider />
            <Container pb={6} maxW="container.sm">
              <Paragraph>
                The login feature will allow you to track your progress across
                multiple sessions and provide you with a brief history of your
                activity.
              </Paragraph>
              <Paragraph>
                We're worknig hard to finish the development of this feature.
              </Paragraph>
            </Container>
          </Box>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Profile
