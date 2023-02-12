import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import PortfolioCard from './PortfolioCard'

// image imports
import NPCImage from '../images/NPCImage.PNG'
import LeebayImage from '../images/LeebayImage.PNG'
import STAImage from '../images/alienGameScreenShot2.PNG'

export default function Portfolio() {

  //Change card size here
  const cardMaxWidth = 400
  const cardHeight = 1300

  return (
    <Box sx={{ bgcolor:"primary.background", minWidth:450 }} id="Portfolio">
        
      <Box m={6} sx={{maxWidth:1200,m:"auto", minWidth:450, pt:5}}>

        <Typography variant="h3" gutterBottom sx={{fontWeight: 'bold', pt:5, textAlign:"center", color:"white"}}>
          Portfolio
        </Typography>

        <Grid container spacing={2} mt={0} py={6} justifyContent="center">

          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <PortfolioCard 
            imgURL={NPCImage} 
            title="Nelson Portable Coolrooms"
            text1="This was a freelance front end project I did for the company 'Nelson Portable Coolrooms' in late 2022"
            text2="The brief was to create a company website that showcases all of their products, support email enquiries and 
            look modern and responsive"
            text3=""

            websiteURL="http://nelsonportablecoolrooms.life/"
            gitHubURL="https://github.com/Leeroy-Steele/Mini-Project2-Nelson-Portable-Coolrooms"
            techStack={[
              "ReactJS",
              "Material UI",
              "STMP2GO Email API",
              "HTML",
              "CSS",
              "Javascript"
            ]}
            cardHeight = {cardHeight}
            />
          </Grid>

          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <PortfolioCard 
            imgURL={LeebayImage} 
            title="Leebay"
            text1="This was a personal full stack project that I finished in jan 2023"
            text2="My mission was to create an EBay / Trade Me like platform where users can 
            create their own live auctions and others can bid and eventually purchase the items"
            text3="This was my capstone project for my IOD coding bootcamp"
            websiteURL=""
            gitHubURL="https://github.com/Leeroy-Steele/Leebay---Capstone-React-Front-End"
            gitHubBackendURL="https://github.com/Leeroy-Steele/Leebay-Capstone-Nodejs-Back-End-"
            techStack={["ReactJS","Material UI","Axios","Moment","NodeJS","MySQL Database","Multer","Swagger - documentation","Nodemon","Body-Parser"]}
            cardHeight = {cardHeight}
            />
          </Grid>

          <Grid item sx={{maxWidth:cardMaxWidth}}>
            <PortfolioCard 
            imgURL={STAImage} 
            title="Squish the Alien"
            text1="Real time browser game 'Squish the alien' was a personal project I worked on in 2020 to teach myself HTML, CSS and lots of Javascript"
            text2="The objective of the game is to drive the firetruck into the aliens before they destroy your home"
            websiteURL="https://leeroy-steele.github.io/Squish-the-alien/"
            gitHubURL="https://github.com/Leeroy-Steele/Squish-the-alien"
            techStack={["Javascript","CSS","HTML"]}
            cardHeight = {cardHeight}
            />
          </Grid>


        </Grid>

    </Box>
    
    </Box>
  )
}
