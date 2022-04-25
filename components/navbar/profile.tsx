import { IconButton, useColorModeValue } from "@chakra-ui/react"
import { FaUserCircle } from "react-icons/fa"

const Profile = () => {
  return (
    <IconButton
      borderRadius="xl"
      aria-label="Profile"
      ml={2}
      icon={<FaUserCircle size={20} />}
      variant="outline"
      bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.300")}
    />
  )
}

export default Profile
