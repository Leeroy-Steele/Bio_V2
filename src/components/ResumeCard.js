import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ResumeCard(props) {
  return (
    <Card sx={{height:props.cardHeight}} >
        <CardMedia
          component="img"
          height="140"
          image={props.imgURL}
          alt="Employer image"
        />
        <CardContent sx={{p:0, border:0}}>
        <Box sx={{ bgcolor:"secondary.background",width:1, p:2, height:500 }}>

          <Typography gutterBottom variant="h5" textAlign="center"  color="white">
            {props.companyName}
          </Typography>
        
          <Typography variant="subtitle2" textAlign="center" color="white">
            {props.jobTitle}
          </Typography>

          <br></br>

          <Typography variant="subtitle2" color="white" textAlign="center" >
            {props.dates}
          </Typography>

          

          <br></br>

          <Typography variant="body1" color="white" sx={{p:2}}>
            {props.text}
          </Typography>
          </Box>
        </CardContent>
    </Card>
  );
}