import { Box } from "@chakra-ui/react"

interface FooterProps {
  numTodos: number
}

const Footer = (props: FooterProps) => {
  const { numTodos } = props
  return (
    <Box display="flex" pt={2} pl={1} borderTop="1.25px solid grey">
      <Box fontWeight="bold" fontSize={20}>
        {numTodos}
      </Box>
      <Box fontSize={20}>&nbsp;tasks left.</Box>
    </Box>
  )
}

export default Footer
