import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import ProjectGrid from "./components/ProjectGrid"
import { Box, Grid, GridItem } from '@chakra-ui/react'
import Footer from './components/Footer'
import Projects from "./pages/Projects.jsx"
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'


function App() {
  return (
    <Router>
      <Grid
      templateAreas={`"nav" "main" "footer"`}
      templateColumns={"1fr"}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
       
        <GridItem area="main">
          <Routes>
            <Route exact path = "/" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </GridItem>
      
        <GridItem area="footer">
          <Footer/>
        </GridItem>
      </Grid>
    </Router>
  )
}

export default App
