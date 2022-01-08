import { Box } from "@chakra-ui/react"
import styled from "@emotion/styled"

const IndentedParagraph = styled.div`
  text-align: center;
  width: 500px;
  opacity: 0.5;
  font-size: small;
  position: absolute;
  left: 50%;
  margin-left: -250px;
  bottom: 20px;
`

const Footer = () => {
  return (
    <IndentedParagraph>
      &copy; {new Date().getFullYear()} Takuya Matsuyama. All Rights Reserved.
    </IndentedParagraph>
  )
}

export default Footer
