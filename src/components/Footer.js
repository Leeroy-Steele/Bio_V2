import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {

  return (
    <Box sx={{ bgcolor:"primary.background", minWidth:450 }} id="Hobbies">
        
      <Box m={6} sx={{maxWidth:900,m:"auto",minWidth:450, p:5}}>

        <Typography variant="h6" gutterBottom sx={{fontWeight: 'bold', pt:5, font:'white', textAlign:"center", color:"white"}}>
            Leeroy Steele
        </Typography>


    </Box>
    
    </Box>
  )
}
