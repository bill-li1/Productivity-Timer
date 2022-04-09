import styled from "@emotion/styled"

const IndentedParagraph = styled.div`
  text-align: center;
  width: 500px;
  opacity: 0.5;
  font-size: small;
  position: absolute;
  left: 50%;
  margin-left: -250px;
  bottom: 10px;
`

const Footer = () => {
  return (
    <IndentedParagraph>
      &copy; {new Date().getFullYear()} Bill Li. All Rights Reserved.
    </IndentedParagraph>
  )
}

export default Footer
