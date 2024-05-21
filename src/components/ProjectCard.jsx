import { Image, Box, Text, Link, Button, VStack, Heading } from '@chakra-ui/react'
import { useState } from 'react';


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
            <Link href={project.link} isExternal>{project.name}</Link>
          </Text>
      
          <Box paddingX={hover? 6: 8}>
            <Image borderRadius={12} src={project.image_background} alt={project.name}/>
          </Box>

          <Text paddingX={2}>{project.description}</Text>
          
        </VStack>
    </Box>
  )
}

export default ProjectCard;