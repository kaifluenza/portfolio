import { Box, HStack, Heading, Link, VStack, Text } from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
const Contact = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Heading fontSize="5xl" color="pink.500" paddingY="80px">Get In Touch With Me</Heading>
      <HStack justify="center" gap={6}>
        <VStack spacing={6}>
          <MdEmail size="26px"/>
          <FaPhoneSquare size="23px"/>
          <FaLinkedin size="24px"/>
        </VStack>

        <VStack align="flex-start" spacing={6}>
          <Text>wanrueni.12@gmail.com</Text>
          <Text>(786) 572-4020</Text>
          <Link href="https://www.linkedin.com/in/wanruenik/" isExternal>www.linkedin.com/in/wanruenik</Link>
        </VStack>

      </HStack>
    </Box>
  )
}

export default Contact