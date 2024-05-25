import { Image, Box, Text, Link, Button, VStack, Heading, HStack } from '@chakra-ui/react'
import { useState } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProjectCard = ({project}) => {
  const [hover, setHover] = useState(false);

  return (
    <Box 
    borderRadius={30}
    bgColor="gray.200" 
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    boxShadow={hover? "xl" : "none"}
    >
        <VStack spacing={4} h="100%" justifyContent="space-between" paddingY={4}>
          <Text fontSize={hover? "3xl" : "2xl"} fontWeight="bold">
            <HStack>
              <Link href={project.link} isExternal>{project.name}</Link>
              <ExternalLinkIcon/>
            </HStack>
          </Text>
      
          <Box paddingX={hover? 7: 8}>
            <Image borderRadius={12} src={project.image_background} alt={project.name}/>
          </Box>

          <Text paddingX={2}>{project.description}</Text>
          
        </VStack>
    </Box>
  )
}

export default ProjectCard;