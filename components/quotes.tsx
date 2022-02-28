import { Box, useColorModeValue } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import axios from "axios"

const Quote = () => {
  const [quote, setQuote] = useState<IQuote>({
    content: "",
    author: "",
  })

  const getQuotes = () => {
    axios.get("https://api.quotable.io/random").then((response) => {
      setQuote(response.data)
    })
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <Box>
      <Box
        borderRadius="15px"
        onClick={getQuotes}
        p={3}
        pl={6}
        pr={6}
        pb={5}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.600", "#5D5D64")}
        boxShadow="md"
      >
        {quote.content}
      </Box>
      <Box
        borderRadius="lg"
        onClick={getQuotes}
        mr={0}
        ml={"auto"}
        pb={2}
        pt={2}
        maxW="250px"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        textAlign="center"
        transform="auto"
        translateY="-25%"
        translateX="-15%"
        boxShadow="md"
        bg={useColorModeValue("#E6D7C4", "#3E3E43")}
      >
        &#8212; {quote.author}
      </Box>
    </Box>
  )
}

interface IQuote {
  content: String
  author: String
}

export default Quote
