import { Box, useColorModeValue } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import allQuotes from "../util/quotes.json"

const Quote = () => {
  const [quote, setQuotes] = useState<IQuote>({
    text: "",
    author: "",
  })

  const getQuotes = () => {
    const quoteIndex = Math.floor(Math.random() * allQuotes.length)
    if (
      allQuotes[quoteIndex].text !== null &&
      allQuotes[quoteIndex].author !== null
    ) {
      setQuotes(allQuotes[quoteIndex])
    } else {
      getQuotes
    }
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <Box>
      <Box
        borderRadius="lg"
        onClick={getQuotes}
        p={3}
        pl={6}
        pr={6}
        pb={5}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
        boxShadow="md"
      >
        {quote.text}
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
        bg={useColorModeValue("#FFDDCD", "#B69F8A")}
      >
        {quote.author}
      </Box>
    </Box>
  )
}

interface IQuote {
  text: String
  author: String
}

export default Quote
