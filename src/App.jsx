import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import { Grid, GridItem } from '@chakra-ui/react'

function App() {
  return (
    <Grid 
      templateAreas={`"nav" "header" "main" "footer"`} >

      <GridItem area={"nav"}>
        <NavBar/>
      </GridItem>

      <GridItem area={"header"}>
        <Header/>
      </GridItem>

      <GridItem area={"main"}></GridItem>

      <GridItem area={"footer"}></GridItem>

    </Grid>
  )
}

export default App
