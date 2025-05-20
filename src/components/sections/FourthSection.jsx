import React from "react";
import bottomCornerImage from "../../assets/bottomRightCorner.svg";
import { Button, Grid, Typography } from "@mui/material";
import theme from "../../config/theme";
import CustomSlider from "../slider/CustomSlider";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const FourthSection = ({ ngoDetailList }) => {
  return (
    <Grid
      sx={{
        paddingTop: "20px",
        position: "relative",
        backgroundImage: `url("${bottomCornerImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
        backgroundSize: {
          xs: "150px",
          md: "180px",
          lg: "auto",
        },
      }}
    >
      <Typography variant="extraLarge" sx={{ paddingLeft: "80px" }}>
        Most Recommended NGOs
      </Typography>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          background: `${theme.palette.primary.main}`,
          padding: "10px",
          borderRadius: "0px 25px 0px 0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="labelLarge" color="#fff">
          Sort By
        </Typography>

        <Typography variant="small" color="#fff">
          Recommended
        </Typography>

        <Button
          variant="menuButton"
          color="#fff"
          endIcon={<KeyboardArrowDownOutlinedIcon />}
        >
          Name
        </Button>
        <Button
          variant="menuButton"
          color="#fff"
          endIcon={<KeyboardArrowDownOutlinedIcon />}
        >
          Newest
        </Button>
      </Grid>
      <Grid size={{ xs: 12 }} sx={{ marginTop: "20px", paddingLeft: "80px" }}>
        <CustomSlider ngoDetailList={ngoDetailList} />
      </Grid>
    </Grid>
  );
};

export default FourthSection;
