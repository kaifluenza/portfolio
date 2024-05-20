import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box paddingY={12}>
        <Heading color="pink.500" as="h1" fontSize="6xl">Hi. I'm Wanrueni.</Heading>
        <Text fontSize="2xl">A Front-End Developer</Text>
    </Box>
  )
}

export default Header