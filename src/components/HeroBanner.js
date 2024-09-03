import React from 'react';
import { Box, Stack, Typography,Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }}  position="relative" p="20px">
        <Typography color="#007DFE"
        fontWeight="600"
        fontSize="26px">
            Cabs Fitness Club
        </Typography>
        <Typography color= "#00000"
        fontWeight="700"
        sx={{ fontSize: {lg: '44px', xs:'40px' 
        }}}
        mb="23px"
        mt="30px">
            Sweat, Smile <br/> and Repeat
        </Typography><Typography color="#007DFE"
        fontWeight="100"
        fontSize="22px"
        lineHeight="35px"
        mb={3}>
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' color="error"
        href="#exercises"
        sx={{backgroundColor: '#007DFE',
            paddiing:'10px'
        }}>
            Explore Exercises
        </Button>
        <Typography
        fontWeight={600}
        color="#007DFE"
        sx={{
            opacity: 0.1,
            display: {lg: 'block', xs:'none'}
        }}fontSize={200}>
            Exercise
        </Typography>
        <img src={HeroBannerImage}
        alt="banner"
        className="hero-banner-img"
       />
    </Box>
  )
}

export default HeroBanner