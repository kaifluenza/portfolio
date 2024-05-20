import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import projects from "../data/projects"

const ProjectGrid = () => {
  return (
    <Box w="100%" p={5}>
      <SimpleGrid
          columns={{base:1,md:1,lg:2,xl:2}}
          spacing={12}
      >
        {projects.map(project=>(
          <ProjectCard key={project.id} project={project}/>
          ))}
      </SimpleGrid>
    </Box>
  )
}

export default ProjectGrid