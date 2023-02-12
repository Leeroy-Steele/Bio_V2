import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import HobbyCard from './HobbyCard'

// image imports
import GamingImage from '../images/gamingPhoto.jpg'
import FishingImage from '../images/fishingPhoto.jpg'
import BandImage from '../images/bandPhoto.jpg'
import TravelImage from '../images/travelPhoto.jpg'

export default function Hobbies() {

    //Change card size here
    const cardMaxWidth = 300
    const cardHeight = 350

  return (
    <Box sx={{ bgcolor:"primary.background", minWidth:450 }} id="Hobbies">
        
      <Box m={6} sx={{maxWidth:900,m:"auto",minWidth:450, pt:5}}>

        <Typography variant="h3" gutterBottom sx={{fontWeight: 'bold', pt:5, font:'white', textAlign:"center", color:"white"}}>
            Personal Hobbies
        </Typography>

        <Grid container spacing={2} mt={0} py={6} justifyContent="center">

          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <HobbyCard 
            imgURL={GamingImage} 
            title="PC Gaming"
            text="I have been playing PC games since I was very young. My earliest gaming memory was playing 'Alex the Kid' on Sega Mastersystem. My love of gaming has tought me a lot about how to build and configure PCs"
            cardHeight={cardHeight}
            />
          </Grid>

          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <HobbyCard 
            imgURL={BandImage} 
            title="Playing Music"
            text="I spend a lot of time at home playing my electric guitar and bass. I have played in a few bands in Auckland / London and nothing beats the thrill of playing music live (If people actually show up to our gigs!)"
            cardHeight={cardHeight}
            />
          </Grid>

          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <HobbyCard 
            imgURL={FishingImage} 
            title="Fishing"
            text="I love going out fishing on my boat. usually my wife catches larger fish than me which she loves to remind people from time to time :)"
            cardHeight={cardHeight}
            />
          </Grid>

          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <HobbyCard 
            imgURL={TravelImage} 
            title="Travel"
            text="I love to travel and see the world with my wife. We based ourselves in London between 2013 - 2022 and we travelled in this time to over 40 countries"
            cardHeight={cardHeight}
            />
          </Grid>

        </Grid>

    </Box>
    
    </Box>
  )
}
