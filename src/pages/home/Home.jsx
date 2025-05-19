import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
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
import arrowDown from "../../assets/arrowDown.svg"
import ThirdSection from "../../components/ThirdSection";
import theme from "../../config/theme";

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

  

  return (
    <Grid
      container
      direction={"column"}
      // sx={{backgroundColor: "yellow"}}
    >
      <Grid
        sx={{
          height: "100vh",
          position: "relative",
          backgroundImage: `url("${topRightCornerImage}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: {
            xs:"300px",
            md:"400px",
            lg:"auto"
          },
        }}
      >
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
        <SecondSection />
      </Box>
      <ThirdSection />
      <Divider  />
      <Grid
        sx={{
          padding:'80px',
          paddingTop:'20px'
        }}
      >
        <Typography variant="extraLarge">
          Most Recommended NGOs  
        </Typography>
        <Grid 
          size={{xs:12, md:6}}
          sx={{
            background: `${theme.palette.primary.main}`,
            padding:'10px',
            borderRadius:'0px 25px 0px 0px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
          }}
        
        >
          <Typography variant="labelLarge" color="#fff"> 
            SORT BY
          </Typography>

           <Typography variant="small" color="#fff"> 
            Recommended
          </Typography>

           <Button  color="#fff"  > 
            Name
          </Button>
          <Button variant="small" color="#fff" > 
            Newest
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
