import {
  Container,
  Heading,
  Link,
  Box,
  useColorModeValue,
} from "@chakra-ui/react"
import styled from "@emotion/styled"
import Footer from "./footer"

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
  return (
    <Box bg={useColorModeValue("whiteAlpha.600", "#5D5D64")} h="100vh">
      <Container pt={16} pb={3} maxW="container.sm">
        <Box>
          <Heading pb={6}>
            An online Pomodoro Timer to boost your productivity
          </Heading>
          <Heading pb={3} as="h3" variant="section-title">
            What is Pomofocus?
          </Heading>
          <IndentedParagraph>
            Pomofocus is a customizable pomodoro timer that works on desktop &
            mobile browser. The aim of this app is to help you focus on any task
            you are working on, such as study, writing, or coding. This app is
            inspired by the{" "}
            <Link href="https://illust.odoruinu.net/" target="_blank">
              Pomodoro Technique
            </Link>{" "}
            which is a time management method developed by Francesco Cirillo.
          </IndentedParagraph>
        </Box>
        <Box>
          <Heading pt={3} pb={3} as="h3" variant="section-title">
            What is Pomodoro Technique?
          </Heading>
          <IndentedParagraph>
            The Pomodoro Technique is created by Francesco Cirillo for a more
            productive way to work and study. The technique uses a timer to
            break down work into intervals, traditionally 25 minutes in length,
            separated by short breaks. Each interval is known as a pomodoro,
            from the Italian word for 'tomato', after the tomato-shaped kitchen
            timer that Cirillo used as a university student. -{" "}
            <Link href="https://illust.odoruinu.net/" target="_blank">
              Wikipedia
            </Link>
          </IndentedParagraph>
        </Box>
        <Box>
          <Heading pt={3} pb={3} as="h3" variant="section-title">
            How to use the Pomodoro Timer?
          </Heading>
          <Paragraph>
            1. Add tasks to work on today <br /> 2. Set estimate pomodoros (1 =
            25min of work) for each tasks <br /> 3. Select a task to work on
            <br /> 4. Start timer and focus on the task for 25 minutes <br />
            5. Take a break for 5 minutes when the alarm ring <br />
            6. Iterate 3-5 until you finish the tasks <br />
          </Paragraph>
        </Box>
        <Footer />
      </Container>
    </Box>
  )
}

export default Information
