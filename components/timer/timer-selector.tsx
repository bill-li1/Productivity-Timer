import { useRadio, Box, useColorModeValue } from "@chakra-ui/react"

export default function RadioCard(props) {
  const { color } = props
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label" w="33%" pt="2" pb="2" h="100%">
      <input {...input} />
      <Box
        fontSize="16px"
        {...checkbox}
        display="flex"
        justifyContent="center"
        pt="2px"
        h="100%"
        cursor="pointer"
        color={useColorModeValue("black", "white")}
        borderRadius="10px"
        _checked={{
          bg: color,
          color: "white",
        }}
      >
        {props.children}
      </Box>
    </Box>
  )
}
