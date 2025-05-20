import React from 'react'
import topLeftCornerImage from "../../assets/top_left_corner.svg";
import donationImage from "../../assets/donation.svg";
import projectsImage from "../../assets/projects.svg";
import eventsImage from "../../assets/events.svg";
import customImage from "../../assets/custom.svg";
import { Box, Grid, Typography } from '@mui/material';
const SecondSection = () => {

  const services = [
      { id: 1, title: "Donations", src: `${donationImage}` },
      { id: 2, title: "Projects", src: `${projectsImage}` },
      { id: 3, title: "Events", src: `${eventsImage}` },
      { id: 4, title: "Customization", src: `${customImage}` },
    ];
    
  return (
     
        <Grid
          size={{ xs: 12 }}
          height={"100vh"}
          sx={{
            position: "relative",
            backgroundImage: `url("${topLeftCornerImage}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
            backgroundSize: {
              xs: "150px",
              md: "auto",
            },
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop:"200px"
            }}
          >
            <Typography variant="small" color="#5E6282">
              CATEGORY
            </Typography>
            <Typography variant="labelLarge" color="#000">
              We Offer Best Services
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "20px",
                justifyContent:'space-between'
              }}
            >
              {services.map((option) => (
                <Box
                  key={option.id}
                  sx={{
                    borderRadius: "20px",
                    boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.05)", // soft shadow
                    padding: "40px",
                    margin: "20px",
                    background: "#fff",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)", // optional lift on hover
                    },
                  }}
                >
                  <img src={option.src} width="100px" />

                  <Typography> {option.title}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

)
}

export default SecondSection