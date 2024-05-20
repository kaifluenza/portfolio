import React from 'react'
import { Box, Link, Text, HStack } from '@chakra-ui/react'
import {DownloadIcon} from "@chakra-ui/icons"
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <Box marginTop={10}>
            <HStack paddingY={10} justify="space-around">
                <Link><DownloadIcon/> Download Resume</Link>
                <HStack>
                    <FaGithub />
                    <Link href='https://github.com/kaifluenza' isExternal>Github</Link>
                </HStack>
            </HStack>

            <HStack justify="center">
                <AiOutlineCopyrightCircle/>
                <Text fontSize="xl">Wanrueni Khuantang</Text>
            </HStack>
        </Box>
      )
}

export default Footer