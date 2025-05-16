import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import topRightCornerImage from "../../assets/top_right_corner.svg";
import topLeftCornerImage from "../../assets/top_left_corner.svg";
import donationImage from "../../assets/donation.svg";
import projectsImage from "../../assets/projects.svg";
import eventsImage from "../../assets/events.svg";
import customImage from "../../assets/custom.svg";
import NgoHubLogo from "../../assets/NGOHUB.svg";
import MenuIcon from "@mui/icons-material/Menu";
import FirstSection from "../../components/sections/FirstSection";

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

  const services = [
    { id: 1, title: "Donations", src: `${donationImage}` },
    { id: 2, title: "Projects", src: `${projectsImage}` },
    { id: 3, title: "Donations", src: `${eventsImage}` },
    { id: 4, title: "Donations", src: `${customImage}` },
  ];
  return (
    <Grid
      container
      direction={"column"}
      // sx={{backgroundColor: "yellow"}}
      
    >
    <Grid sx={{
        height:'80vh',
        position: "relative",
        backgroundImage: `url("${topRightCornerImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: {
          xs: "150px",
          md: "auto",
        },
      }}>
      <AppBar
        component={"nav"}
        color="transparent"
        sx={{ border: "none", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
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

      <Box
        component={"main"}
        display="flex"
        sx={{
          flexDirection: {
            xs: "column",
          },
          
        }}
      >
        {/* <Toolbar /> */}
       
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
              padding: "40px",
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
                    padding: "32px",
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
      </Box>
    </Grid>
  );
};

export default Home;
