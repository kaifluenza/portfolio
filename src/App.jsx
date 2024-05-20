import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import ProjectGrid from "./components/ProjectGrid"
import { Box, Grid, GridItem } from '@chakra-ui/react'
import Footer from './components/Footer'

function App() {
  return (
    <Grid
    templateAreas={`"nav" "header" "main" "footer"`}
    templateColumns={"1fr"}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>

      <GridItem area="header">
        <Header/>
      </GridItem>

      <GridItem area="main">
        <ProjectGrid/>
      </GridItem>
    
      <GridItem area="footer">
        <Footer/>
      </GridItem>

    </Grid>
  )
}

export default App
