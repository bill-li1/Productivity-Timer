import Head from "next/head"
import Information from "../information"
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
      <Information />
    </Box>
  )
}

export default Main
