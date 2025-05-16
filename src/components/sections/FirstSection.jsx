import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import dashboardImage from "../../assets/dashboard.svg";

const FirstSection = () => {
  return (
    <Grid
      display={"flex"}
      mt={4}
      size={{ xs: 12, md: 12, lg:12 }}
      container
        fixed
      width={"100%"}
      height={"100vh"}
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
        px: '40px', 
      }}
    >
      <Grid
        size={{ xs: 4, md: 3 }}
        paddingTop={8}
        paddingBottom={8}
        display={"flex"}
        flexDirection={"column"}
        alignItems="flex-start"
      >
        <Typography variant="labelSmall" color="#DF6951" fontWeight={"bold"}>
          TOP NGO LISTING
        </Typography>
        <Typography variant="extraLarge" color="#181E4B" fontWeight={"bold"}>
          Welcome to the NGO Hub
        </Typography>
        <Typography variant="cardTitle" color="#181E4B" fontWeight={"bold"}>
          Our work aims to break the vicious cycle of poverty and social
          isolation and to restore hope for a better future.
        </Typography>

        <Button variant="tertiary" sx={{ marginTop: "30px" }}>
          Discover More
        </Button>
      </Grid>

      <Grid size={{ xs: 8, md: 9 }}>
        <Box
          component={"img"}
          src={dashboardImage}
          sx={{
            position: "absolute",
            right: "20%",
            bottom: 0,
            width: {
              xs: "500px",
              md: "auto",
            },
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default FirstSection;
