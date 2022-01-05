import Head from "next/head"
import Navbar from "../navbar"
import { Box, Container } from "@chakra-ui/react"

const Main = ({ children, router }) => {
  return (
    <Box as="main" border="3px solid blue" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title> Pomdoro Timer - Homepage </title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
