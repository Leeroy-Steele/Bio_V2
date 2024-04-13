import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Mugshot from '../images/mugShot.PNG'

export default function Bio() {

    const navigateToUrl = (URL)=>{
        window.location.href = URL;
    }


  return (
    <>  
        <br></br>

        <Grid container spacing={2} direction="row-reverse" mt={6} py={6} id="Home">

            <Grid item xs={11} md={5}>
                <Box m={6} sx={{ width: '100%', maxWidth: 500, margin:"auto" }}>

                    <img className='mugShot' src={Mugshot} alt='profile picture'></img>
                    
                </Box>
            </Grid>
                
            <Grid item xs={11} md={5} m={3}>
                <Typography variant="h2" gutterBottom sx={{fontWeight: 'bold',pt:5}}>
                    Hi!
                </Typography>

                <Typography variant="h4" gutterBottom>
                    I'm Leeroy. I'm a Junior Web Developer
                </Typography>

                <Typography variant="body1" gutterBottom>
                    I have been coding as a hobby since 2020 and I completed a software engineering course with AUT/ Institute of Data in 2023
                </Typography>

                <Typography variant="body1" gutterBottom sx={{my:3}}>
                    I am currently working as Lead Product Support Specialist (including QA) for Lancom, NZ 
                </Typography>

                <Stack spacing={2} direction="row" m={4} sx={{ my:5 }}>
                    <Button color='primary' onClick={()=>{navigateToUrl('https://www.linkedin.com/in/lee-s-b2819b217/')}} size="large" sx={{minWidth:200, py:2}} variant="outlined">Linkedin</Button>
                    <Button color='primary' onClick={()=>{navigateToUrl("https://github.com/Leeroy-Steele")}} size="large" sx={{minWidth:200, color:"white"}} variant="contained">Github</Button>
                </Stack>
            </Grid>
        </Grid>
    </>
  )
}
