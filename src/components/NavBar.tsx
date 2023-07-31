import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/react.svg"

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} />
        <Text>Sir Mahdi</Text>
    </HStack>
    )
}

export default NavBar