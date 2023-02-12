import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function HobbyCard(props) {

  const navigateToURL = (URL)=>{
    window.location.href = URL;
  }

  return (
    <Card sx={{height:props.cardHeight}}>

      <CardHeader

        title={props.title}
        sx={{textAlign:"center",bgcolor:"secondary.background", color:"primary.text",py:4}}
      />

        <CardMedia
          component="img"
          height="240"
          image={props.imgURL}
          alt="Project image"
        />
        <CardContent sx={{p:0, border:0}}>

          <Box sx={{ width:1, p:2, height:150 }}>

            {/* <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center", pb:1, color:"white"}}>
              {props.title}
            </Typography> */}

            <Stack spacing={0} direction="column">

            {(props.websiteURL)?
              <CardActions>
                <Button variant="outlined" color="secondary" sx={{width:"60%", height:40, m:"auto"}} onClick={()=>{navigateToURL(props.websiteURL)}}>Website</Button>
              </CardActions>
              :
              null
            }
              
            {(props.gitHubURL)?
              <CardActions>
                <Button variant="outlined" color="secondary" sx={{width:"60%", height:40, m:"auto"}} onClick={()=>{navigateToURL(props.gitHubURL)}}>Github (Front End)</Button>
              </CardActions>
              :
              null
            }

            {(props.gitHubBackendURL)?
              <CardActions>
                <Button variant="outlined" color="secondary" sx={{width:"60%", height:40, m:"auto"}} onClick={()=>{navigateToURL(props.gitHubBackendURL)}}>Github (Backend)</Button>
              </CardActions>
              :
              null
            }

            </Stack>

          </Box>


          <Box sx={{ width:1, p:2, height:300, borderRadius:1 }}>

          {(props.text1)?
            <Typography variant="body1" color="text.secondary" >
              {props.text1}
            </Typography>
            :
            null
          }

          <br></br>

          {(props.text2)?
            <Typography variant="body1" color="text.secondary" >
              {props.text2}
            </Typography>
            :
            null
          }
          
          <br></br>

          {(props.text3)?
            <Typography variant="body1" color="text.secondary" >
              {props.text3}
            </Typography>
            :
            null
          }

          </Box>

          <Box sx={{ bgcolor:'secondary.main', width:1, p:2, mt:1, height:500}}>

          <Grid sx={{textAlign:"center"}}>

            <Typography variant="h6" color="white">
              Project Tech Stack:
            </Typography>

          </Grid>

 
            <List dense={false}>
              
              {(props.techStack[0])?<ListItem><ListItemText sx={{color:"secondary.text",m:0}} primary={props.techStack[0]}/></ListItem>:null}
              {(props.techStack[1])?<ListItem><ListItemText sx={{color:"secondary.text",m:0}} primary={props.techStack[1]}/></ListItem>:null}
              {(props.techStack[2])?<ListItem><ListItemText sx={{color:"secondary.text",m:0}} primary={props.techStack[2]}/></ListItem>:null}
              {(props.techStack[3])?<ListItem><ListItemText sx={{color:"secondary.text",m:0}} primary={props.techStack[3]}/></ListItem>:null}
              {(props.techStack[4])?<ListItem><ListItemText sx={{color:"secondary.text",m:0}} primary={props.techStack[4]}/></ListItem>:null}
              {(props.techStack[5])?<ListItem><ListItemText sx={{color:"secondary.text",m:0}} primary={props.techStack[5]}/></ListItem>:null}
              {(props.techStack[6])?<ListItem><ListItemText sx={{color:"secondary.text",m:0}} primary={props.techStack[6]}/></ListItem>:null}
              {(props.techStack[7])?<ListItem><ListItemText sx={{color:"secondary.text",m:0}} primary={props.techStack[7]}/></ListItem>:null}
              {(props.techStack[8])?<ListItem><ListItemText sx={{color:"secondary.text",m:0}} primary={props.techStack[8]}/></ListItem>:null}
              {(props.techStack[9])?<ListItem><ListItemText sx={{color:"secondary.text",m:0}} primary={props.techStack[9]}/></ListItem>:null}
             
            </List>
          

          </Box>

        </CardContent>
    </Card>
  );
}


