import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react"
import Quote from "../components/quotes"

const Page = () => {
  return (
    <Container maxW="container.xl">
      <Quote />
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pomdoro Timer
          </Heading>
          <p>test text to put here</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        ></Box>
      </Box>
    </Container>
  )
}

export default Page
