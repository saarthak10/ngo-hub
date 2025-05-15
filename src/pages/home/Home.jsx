import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import topRightCornerImage from "../../assets/top_right_corner.svg";
import reactIcon from "../../assets/react.svg";
import dashboardImage from "../../assets/dashboard.svg"

const Home = () => {
  const pages = [
    { id: 1, title: "Home", color:'#000' },
    { id: 2, title: "Events", color:'#fff' },
    { id: 3, title: "About Us", color:'#fff' },
    { id: 4, title: "Login", color:'#fff' },
    { id: 5, title: "Sign up" , color:'#fff'},
  ];
  return (
    <Grid container direction={"column"} sx={{ position: "relative", height: "100vh",
    }}>
      <img
        src={topRightCornerImage}
        style={{ position: "absolute", right: 0 }}
      />
      <AppBar
      component={"nav"}
        color="transparent"
        sx={{ border: "none", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <img src={reactIcon} />
          </Box>
          <Box>
            {pages.map((item) => (
              <Button
                key={item.id}
                sx={{
                  color: `${item.color}`,
                  fontFamily: "DM Sans",
                  fontWeight: "600",
                  textTransform: "none",
                  fontSize: "16px",
                  marginRight: "30px",
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component={"main"}  p={8} display='flex' flexDirection='row' >
        <Toolbar />
         <Grid size={{xs:4, md:3}} display={'flex'}  flexDirection={'column'} alignItems='flex-start'>
          <Typography variant="labelSmall" color="#DF6951" fontWeight={'bold'}>
          TOP NGO LISTING
          </Typography>
          <Typography variant="extraLarge" color="#181E4B" fontWeight={'bold'}>
              Welcome to the NGO Hub
          </Typography>
          <Typography variant='cardTitle' color="#181E4B" fontWeight={'bold'}>
          Our work aims to break the vicious cycle of poverty and social isolation and to restore hope for a better future.
          </Typography>

          <Button variant='tertiary' sx={{ marginTop : '30px'}}>Discover More</Button>
         </Grid>   

         <Grid size={{xs:8, md:9 }} >
              <img src={dashboardImage} style={{position:'absolute',right:0, bottom:0}} />
          </Grid>            

      </Box>
    </Grid>
  );
};

export default Home;
