import React from 'react'
import foodDonationImage from "../assets/donationIcon.svg";
import childCareImage from "../assets/childCare.svg";
import foodDonationEuropeImage from "../assets/ngoIcon.svg";
import ngoItemIcon from "../assets/ngoItemIcon.svg";
import topLeftCornerImage from "../assets/top_left_corner.svg";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
const ThirdSection = () => {
    const ngoList = [
        {
          id: 1,
          category: "Food Donate",
          location: "Rome Italy",
          src: `${foodDonationImage}`,
        },
        {
          id: 2,
          category: "Child Care",
          location: "London, UK",
          src: `${childCareImage}`,
        },
        {
          id: 3,
          category: "Food Donate",
          location: "Europe",
          src: `${foodDonationEuropeImage}`,
        },
      ];
  return (
     <Grid
            size={{ xs: 12 }}
            minHeight={"100vh"}
            sx={{
              position: "relative",
              backgroundImage: `url("${topLeftCornerImage}")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top left",
              backgroundSize: {
                xs: "150px",
                md: "180px",
                lg:'auto'
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
                padding: "40px",
              }}
            >
              <Typography variant="small" color="#5E6282">
                All NGOs
              </Typography>
              <Typography variant="labelLarge" color="#000">
                Donate For NGOs
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "40px",
                }}
              >
                {ngoList.map((item) => (
                  <Card key={item.id} sx={{ maxWidth: 345,borderRadius:'22px', margin:'20px' }}>
                    <CardActionArea sx={{padding:0}}>
    
                    <CardMedia component={"img"} image={item.src} sx={{padding:0, borderBottomLeftRadius:'0px', borderBottomRightRadius:0}}  />
                    <Box 
                        sx={{
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            padding:'20px'
                        }}
                    >
                    <CardContent>
                      <Box textAlign={'left'}>
                      <Typography gutterBottom variant="small" component="div">
                        {item.location}
                      </Typography>
                      <Box sx={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'end'
                      }}>
                      <Typography variant="small" sx={{ color: "#5E6282", marginRight:'5px' }}>
                        {item.category}
                      </Typography>
                      <img  src={ngoItemIcon} height={'20px'}  width={'20px'}/>
    
                      </Box>
                      </Box>
                    </CardContent>
                    <CardActions 
                      sx={{
                        justifyContent:'flex-end',
                      }}
                    >
                      <Button variant="primary" size="small">Donate</Button>
                    </CardActions>

                    </Box>
                    </CardActionArea>
                  </Card>
                  
                ))}
              </Box>
            </Box>
          </Grid>
)
}

export default ThirdSection