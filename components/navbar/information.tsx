import {
  Heading,
  Link,
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
import { BsFillInfoCircleFill } from "react-icons/bs"
import StyledDivider from "../styled-divider"
import styled from "@emotion/styled"

const Paragraph = styled.p`
  text-align: justify;
  font-size: 18px;
`

const IndentedParagraph = styled.p`
  text-align: justify;
  font-size: 18px;
  text-indent: 1.5em;
`

const Information = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        borderRadius="xl"
        aria-label="Settings"
        ml={3}
        onClick={onOpen}
        icon={<BsFillInfoCircleFill size={20} />}
        variant="outline"
        bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
      />
      <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="34" textAlign="center" mr={20} ml={20} p={5}>
            A Productivity Timer to Help Get Things Done
          </ModalHeader>
          <ModalCloseButton />
          <Box>
            <StyledDivider />
            <Box pl={16} pr={16} pt={2} pb={12} maxW="container.lg">
              <Box>
                <Heading pb={3} as="h3" variant="section-title">
                  Inspiration Behind the Timer
                </Heading>
                <IndentedParagraph>
                  Productivity Timer is a modern pomodoro timer that helps you
                  focus on any task you wish to get done, whether it be
                  studying, coding, or reading. This app allows you to be more
                  productive, more prolific, and more proficient than ever
                  before by leveraging the{" "}
                  <Link href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
                    Pomodoro Technique
                  </Link>{" "}
                  &#8211; a time management system that encourages people to
                  work <i>with</i> the time they have &#8211; rather than
                  against it.
                </IndentedParagraph>
              </Box>
              <Box>
                <Heading pt={3} pb={3} as="h3" variant="section-title">
                  The Pomodoro Technique
                </Heading>
                <IndentedParagraph>
                  The pomodoro technique breaks your workday into 25 minute
                  sections separated by 5 minute breaks. Each 30 minute interval
                  is referred to as a pomodoro. After about three or four
                  pomodoros, you can take a longer break of around 15 or 20
                  minutes. The philosophy behind the technique is that the timer
                  instills a sense of urgency. Rather than feeling like you have
                  endless time in the day to get things done and then ultimately
                  wasting those precious work hours on distractions, you know
                  you only have 25 minutes to make as much progress on a task as
                  possible.
                </IndentedParagraph>
              </Box>
              <Box>
                <Heading pt={3} pb={3} as="h3" variant="section-title">
                  Main Features
                </Heading>
                <Paragraph>
                  &#8211;&nbsp;&nbsp; Customizable timer intervals to best suit
                  your working style. <br /> &#8211;&nbsp;&nbsp; Audio
                  notifications at the end of each timer interval.
                  <br /> &#8211;&nbsp;&nbsp; Built in todo list with ability to
                  add subtasks.
                  <br /> &#8211;&nbsp;&nbsp; Clean and intuitive user interface
                  with customizable colors.
                  <br />
                  &#8211;&nbsp;&nbsp; Built in activity tracker (coming soon!)
                </Paragraph>
              </Box>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Information
