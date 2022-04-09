import Head from "next/head"
import Footer from "../footer"
import { Box } from "@chakra-ui/react"

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Box h="100vh">
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title> Pomodoro Timer - Homepage </title>
        </Head>
        {children}
      </Box>
      <Footer />
    </Box >
  )
}

export default Main
