import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Hobbies() {
  return (
    <>
        <Grid container spacing={2} mt={6} py={6} sx={{bgcolor: 'orange' }}>
            <Box m={6} sx={{ width: '100%', maxWidth: 500,  }}>

                <Typography variant="h3" gutterBottom sx={{fontWeight: 'bold', pt:2}}>
                    Hobbies
                </Typography>




            </Box>
        </Grid>
    </>
  )
}
