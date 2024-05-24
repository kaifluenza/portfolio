import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box color="pink.500" paddingY="80px">
        <Heading fontSize="6xl">Hi. I'm Wanrueni.</Heading>
        <Text fontSize="4xl" fontWeight="bold">A Front-End Developer</Text>
    </Box>
  )
}

export default Header