import { Box } from '@chakra-ui/react'
import ProjectGrid from '../components/ProjectGrid'
import Header from '../components/Header'

const Projects = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header/>
      <ProjectGrid/>
    </Box>
  )
}

export default Projects