import {
  Box,
  Spacer,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaEllipsisV, FaHamburger } from "react-icons/fa"

interface FooterProps {
  numTodos: number
  removeAllTodos: () => void
}

const Footer = (props: FooterProps) => {
  const { numTodos, removeAllTodos } = props
  return (
    <Box display="flex" mt={3} ml={1}>
      <Box fontWeight="bold" fontSize={20}>
        {numTodos}
      </Box>
      <Box fontSize={20}>&nbsp;tasks left.</Box>
      <Spacer />
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          size="sm"
          borderRadius="3xl"
          icon={<FaEllipsisV size={14} />}
          variant="outline"
          bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
        />
        <MenuList>
          <MenuItem>New Tab</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File...</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default Footer
