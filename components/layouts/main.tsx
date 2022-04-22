import Head from "next/head"
import { Box } from "@chakra-ui/react"
import Footer from "../footer"

const Main = ({ children }) => {
  return (
    <Box as="main">
      <Box minH="100vh" pb={12}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title> Pomodoro Timer - Homepage </title>
        </Head>
        {children}
        <Footer />
      </Box>
    </Box >
  )
}

export default Main
