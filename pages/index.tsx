import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" p={3} bg="red" mb={6} align="center">
        Hello, this is a pomdoro timer that you can use
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Takuya Matsuyama
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
