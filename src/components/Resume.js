import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import ResumeCard from './ResumeCard'

// image imports
import AUT_IODImage from '../images/AUT-IOD_Logos.PNG'
import AucklandLiveImage from '../images/aucklandLive.jpg'
import JBCommsImage from '../images/jbcommunications.jpg'
import StagingConnectionsImage from '../images/stagingConnections.png'
import VidcomImage from '../images/vidcom.PNG'
import ArmyImage from '../images/army.png'


export default function Resume() {

  //Change card size here
  const cardMaxWidth = 400
  const cardHeight = 600

  return (
    <Box sx={{ minWidth:450  }} id="Resume">
        
      <Box m={6} sx={{maxWidth:1200,m:"auto",minWidth:450, pt:5}}>

        <Typography variant="h3" gutterBottom sx={{fontWeight: 'bold', pt:5, textAlign:"center"}}>
            Resume
        </Typography>

        <Grid container spacing={2} mt={0} py={6} justifyContent="center">

          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <ResumeCard 
            imgURL={AUT_IODImage} 
            companyName="AUT / Institue Of Data"
            jobTitle="Assistant trainer for the software engineering bootcamp"
            dates="Feb 2023 onwards"
            text="After completeing this software engineering course in early 2023 I was asked if I'd like to 
            come back as assistant trainer to teach the next cohort"
            cardHeight={cardHeight}
            />
          </Grid>

          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <ResumeCard
            imgURL={AucklandLiveImage} 
            companyName="Auckland Live"
            jobTitle="Audio Visual Technician"
            dates="July 2022 onwards"
            text="I started working at Auckland Live in May 2022 when I moved back to New Zealand. My position is 'Event technician' 
            and my responsibilities are; setting up & operating large scale Audio Visual systems for live events"
            cardHeight={cardHeight}
            />
          </Grid>

          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <ResumeCard 
            imgURL={JBCommsImage} 
            companyName="JB Communications"
            jobTitle="Technical Production Engineer"
            dates="Dec 2013 - June 2022" 
            text="I worked at JB Communications for the entire time I was living in London from 2014 to 2022. It was a diverse role that included
            working on live events and also building permanent AV installations. I was also responsible for aftercare and 
            maintenance of the AV installations. This was a client facing role that was 50% office based for organisational
            tasks and 50% onsite work leading the team"
            cardHeight={cardHeight}
            />
          </Grid>

          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <ResumeCard
            imgURL={StagingConnectionsImage} 
            companyName="Staging Connections"
            jobTitle="Event Technician"
            dates="Jan 2010 - Nov 2013"
            text="My responsibilities included setting up large corporate event technology for conferences, awards shows, galadinners. Equipment 
            such as PA systems, large format projection, lighting systems. I worked my way up to becoming a senior event technician in this role. 
            I left this role to move to London"
            cardHeight={cardHeight}
            />
          </Grid>
          
          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <ResumeCard
            imgURL={VidcomImage} 
            companyName="Vidcom"
            jobTitle="AV technician"
            dates="May 2007 - Jan 2010"
            text="This was my first job in the Corporate AV insustry ans I was hired as a AV Technician. My role included setting up and operating 
            various Audio Visual systems. Usually this was for conferences and usually limited to basic PA systems, Projectors and lighting"
            cardHeight={cardHeight}
            />
          </Grid>

          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <ResumeCard
            imgURL={ArmyImage} 
            companyName="NZ Army"
            jobTitle="Automotive technician"
            dates="Jan 2005 - May 2006"
            text="I made it through basic training, branch training and half way through my apprentiship 
            but I left because I didn't love the trade"
            cardHeight={cardHeight}
            />
          </Grid>

        </Grid>

    </Box>
    
    </Box>
  )
}
