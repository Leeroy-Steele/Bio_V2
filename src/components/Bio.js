import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Mugshot from '../images/mugShot.PNG'

export default function Bio() {


  return (
    <>  
        <br></br>

        <Grid container spacing={2} direction="row-reverse" mt={6} py={6}>

            <Grid item xs={12} md={5}>
                <Box m={6} sx={{ width: '100%', maxWidth: 500 }}>

                    <img className='mugShot' src={Mugshot} alt='profile picture'></img>
                    
                </Box>
            </Grid>
                
            <Grid item xs={12} md={5} m={3}>
                <Typography variant="h2" gutterBottom sx={{fontWeight: 'bold',pt:5}}>
                    Hi!
                </Typography>

                <Typography variant="h4" gutterBottom>
                    I'm Leeroy. Junior web developer & Audio Visual Engineer
                </Typography>

                <Typography variant="body1" gutterBottom>
                    I have been coding as a hobby since 2020 and I recently finished a software engineering course with AUT/ Institute of Data in 2020. I am now working as an assistant trainer
                    for Institute of data teaching their software engineering course
                </Typography>

                <Stack spacing={2} direction="row" m={4}>
                    {/* <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button> */}
                    <a href='https://www.linkedin.com/in/lee-s-b2819b217/'><Button size="large" sx={{minWidth:200}} variant="outlined">Linkedin</Button></a>
                    <a href='https://github.com/Leeroy-Steele'><Button size="large" sx={{minWidth:200}} variant="outlined">Github</Button></a>
                </Stack>
            </Grid>
        </Grid>
    </>
  )
}
