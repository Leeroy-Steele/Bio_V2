import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import PortfolioCard from './PortfolioCard'

// image imports
import NPCImage from '../images/NPCImage.PNG'
import LeebayImage from '../images/LeebayImage.PNG'
import STAImage from '../images/alienGameScreenShot2.PNG'
import RMCardsImage from '../images/rickAndMortyCardsWebSiteImage.PNG'

export default function Portfolio() {

  return (
    <Box sx={{ bgcolor:"primary.background", minWidth:450 }} id="Portfolio">
        
      <Box m={6} sx={{maxWidth:1000, m:"auto", minWidth:450, p:5}}>

        <Typography variant="h3" gutterBottom sx={{fontWeight: 'bold', py:5, textAlign:"center", color:"white"}}>
          Portfolio
        </Typography>

        <Stack
          direction={{ sm: 'column' }}
          divider={<Divider orientation="horizontal" color="white" flexItem />}
          spacing={{ xs: 5}}
        >
 
          <Grid item >

            <PortfolioCard
              imgURL={NPCImage} 
              title="Nelson Portable Coolrooms"
              text1="Freelance (front end) project I did for the company 'Nelson Portable Coolrooms' in late 2022"
              text2="The brief was to create a company website that showcases all of their products, show contact details, 
              testimonials, provide support email enquiries all while looking modern and responsive"
              text3=""
              websiteURL="http://nelsonportablecoolrooms.co.nz/"
              gitHubURL="https://github.com/Leeroy-Steele/Mini-Project2-Nelson-Portable-Coolrooms"
              techStack={[
                "ReactJS",
                "Material UI",
                "STMP2GO Email API",
                "HTML",
                "CSS",
                "Javascript"
            ]}
        
            />
          </Grid>

          <Grid item >
            
            <PortfolioCard
              imgURL={LeebayImage} 
              title="Leebay"
              text1="This was a personal full stack project that I finished in jan 2023"
              text2="My mission was to create an EBay / Trade Me like platform where users can 
              create their own live auctions and others can bid and eventually purchase the items"
              text3="This was my capstone project for the 2022 IOD coding bootcamp i completed"
              websiteURL={null}
              gitHubURL="https://github.com/Leeroy-Steele/Leebay---Capstone-React-Front-End"
              gitHubBackendURL="https://github.com/Leeroy-Steele/Leebay-Capstone-Nodejs-Back-End-"
              techStack={["ReactJS","Material UI","Axios","Moment","NodeJS","MySQL Database","Multer","Swagger - documentation","Nodemon","Body-Parser"]}
            />
          </Grid>

          <Grid item >
            
            <PortfolioCard
              imgURL={STAImage} 
              title="Squish the Alien"
              text1="Real time browser game 'Squish the alien' was a personal project I worked on in 2020 to teach myself HTML, CSS and lots of Javascript"
              text2="The objective of the game is to drive the firetruck into the aliens before they destroy your home"
              websiteURL="https://leeroy-steele.github.io/Squish-the-alien/"
              gitHubURL="https://github.com/Leeroy-Steele/Squish-the-alien"
              techStack={["Javascript","CSS","HTML"]}
          
            />
          </Grid>
          
          <Grid item >
            
            <PortfolioCard
              imgURL={RMCardsImage} 
              title="Rick & Morty Character Cards"
              text1="This was a personal front end project that I finished in jan 2022"
              text2="The purpose is to showcase all the characters and Character stats in the Rick and morty TV Show while practising my Fetch / API Calls"
              websiteURL="https://leeroy-steele.github.io/Mini-Project-1_Rick-Morty-/"
              gitHubURL="https://github.com/Leeroy-Steele/Mini-Project-1_Rick-Morty-"
              techStack={["Javascript","CSS","HTML", "APIs", "eCharts"]}
          
            />
          </Grid>

        </Stack>
      </Box>
    </Box>
  )
}
