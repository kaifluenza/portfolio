import { HStack , Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <HStack gap="40px" justifyContent="center">
        <Link as={RouterLink} to="/">Projects</Link>
        <Link as={RouterLink} to="/about">About</Link>
        <Link as={RouterLink} to="/contact">Contact</Link>
    </HStack>
  )
}

export default NavBar