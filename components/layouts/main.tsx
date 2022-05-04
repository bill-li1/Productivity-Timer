import { Box } from "@chakra-ui/react"
import Head from "next/head"
import Footer from "../footer"

const Main = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Productivity Timer is an online pomodoro timer that helps optimize your workday and and boost your productivity."
        />
        <meta name="author" content="Bill Li" />
        <meta name="author" content="Productivity Timer" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="twitter:title"
          content="Productivity Timer - An Online Pomodoro Tracker"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@bill_li1" />
        <meta
          name="twitter:image"
          content="https://www.productivitytimer.app/card.png"
        />
        <meta
          property="og:site_name"
          content="Productivity Timer - An Online Pomodoro Tracker"
        />
        <meta
          name="og:title"
          content="Productivity Timer - An Online Pomodoro Tracker"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.productivitytimer.app/card.png"
        />
        <title>Productivity Timer - An Online Pomodoro Tracker</title>
      </Head>
      <Box minH="100vh" pb={12}>
        {children}
        <Footer />
      </Box>
    </Box>
  )
}

export default Main
