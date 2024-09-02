import React from 'react'
import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Box width="400px" sx={{width: { xl: '1488px'}}} m="auto">
      <Analytics/>
      <SpeedInsights/>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App