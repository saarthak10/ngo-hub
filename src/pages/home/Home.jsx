import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import topRightCornerImage from "../../assets/top_right_corner.svg";
import NgoHubLogo from "../../assets/NGOHUB.svg";
import MenuIcon from "@mui/icons-material/Menu";
import FirstSection from "../../components/sections/FirstSection";
import SecondSection from "../../components/sections/SecondSection";
import ThirdSection from "../../components/sections/ThirdSection";
import ngoOneImage from "../../assets/medicalNgo.png";
import fosterNgo from "../../assets/fosterNgo.png";
import FourthSection from "../../components/sections/FourthSection";

const Home = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pages = [
    { id: 1, title: "Home", color: "#000" },
    { id: 2, title: "Events", color: "#fff" },
    { id: 3, title: "About Us", color: "#fff" },
    { id: 4, title: "Login", color: "#fff" },
    { id: 5, title: "Sign up", color: "#fff" },
  ];



  const ngoDetailList = [
    {
      id: 1,
      name: "Medical Charity",
      description:
        "Our work aims to break the vicious cycle of poverty and social isolation and to restore hope for a better future.",
      src: `${ngoOneImage}`,
    },
    {
      id: 2,
      name: "Foster Care",
      description:
        "Our work aims to break the vicious cycle of poverty and social isolation and to restore hope for a better future.",
      src: `${fosterNgo}`,
    },
    {
      id: 3,
      name: "Health Care",
      description:
        "Our work aims to break the vicious cycle of poverty and social isolation and to restore hope for a better future.",
      src: `${ngoOneImage}`,
    },
  ];

  return (
    <Grid
      container
      direction={"column"}
      // sx={{
      //   paddingLeft:'80px',
      //   paddingRight:'80px',
      // }}
    >
      <Grid
        sx={{
          height: "100vh",
          maxWidth:'100vw',
          position: "relative",
          backgroundImage: `url("${topRightCornerImage}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: {
            xs: "300px",
            md: "400px",
            lg: "auto",
          },
        }}
      >
        <AppBar
          position="static"
          component={"nav"}
          color="transparent"
          sx={{ border: "none", boxShadow: "none" }}
        >
          <Toolbar sx={{
            
            justifyContent: "space-between"}} >
            <Box>
              <img src={NgoHubLogo} height={"30px"} />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleOpenNavMenu}>
                <MenuIcon sx={{ color: "#fff" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {page.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <FirstSection />
      </Grid>
      <SecondSection />
      <ThirdSection />
      <Divider />
      <FourthSection ngoDetailList={ngoDetailList}/>  
    </Grid>
  );
};

export default Home;
