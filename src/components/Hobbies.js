import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import HobbyCard from './HobbyCard'

// image imports
import GamingImage from '../images/gamingPhoto.jpg'

export default function Hobbies() {
  return (
    <Box sx={{ bgcolor: 'orange' }}>
        
    <Box m={6} sx={{maxWidth:900,m:"auto"}}>

        <Typography variant="h3" gutterBottom sx={{fontWeight: 'bold', pt:2, font:'white'}}>
            Hobbies
        </Typography>

        <Grid container spacing={3} mt={6} py={6} justifyContent="center">

            <Grid item xs={8} md={6} lg={3} xl={2}>
              <HobbyCard 
              imgURL={GamingImage} 
              title="Gaming"
              text="This is the text  This is the text This is the text This is the text This is the text"
              />
            </Grid>

            <Grid item xs={8} md={6} lg={3} xl={2}>
              <HobbyCard 
              imgURL={GamingImage} 
              title="Playing Music"
              text="This is the text  This is the text This is the text This is the text This is the text"
              />
            </Grid>

            <Grid item xs={8} md={6} lg={3} xl={2}>
              <HobbyCard 
              imgURL={GamingImage} 
              title="Fishing"
              text="This is the text  This is the text This is the text This is the text This is the text"
              />
            </Grid>

            <Grid item xs={8} md={6} lg={3} xl={2}>
              <HobbyCard 
              imgURL={GamingImage} 
              title="Travel"
              text="This is the text  This is the text This is the text This is the text This is the text"
              />
            </Grid>

        </Grid>

    </Box>
    
    </Box>
  )
}
