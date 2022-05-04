import { Text } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Text
      textAlign="center"
      width="100%"
      opacity="0.6"
      fontSize="small"
      position="absolute"
      bottom="2"
    >
      &copy; {new Date().getFullYear()} Productivity Timer. All Rights Reserved.
    </Text>
  )
}

export default Footer
