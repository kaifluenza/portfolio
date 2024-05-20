import { HStack , Link } from '@chakra-ui/react'
import React from 'react'

const NavBar = () => {
  return (
    <HStack gap="40px" justifyContent="center">
        <Link href='../pages/Projects.jsx'>Projects</Link>
        <Link href='../pages/About.jsx'>About</Link>
        <Link href='../pages/Contact.jsx'>Contact</Link>
    </HStack>
  )
}

export default NavBar