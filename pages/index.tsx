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
            here change
          </Heading>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
