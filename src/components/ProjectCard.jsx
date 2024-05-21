import { Image, Box, Text, Link, Button, VStack, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'


const ProjectCard = ({project}) => {
  return (
    <Box 
    borderRadius={30}
    bgColor="gray.200" 
    >
        <VStack spacing={4} h="100%" justifyContent="space-between" paddingY={4}>
          <Text fontSize="3xl" fontWeight="bold">
            <Link href={project.link} isExternal>{project.name}</Link>
          </Text>
      
          <Box paddingX={8}>
            <Image borderRadius={12} src={project.image_background} alt={project.name}/>
          </Box>

          <Text paddingX={2}>{project.description}</Text>
          
        </VStack>
    </Box>
  )
}

export default ProjectCard;