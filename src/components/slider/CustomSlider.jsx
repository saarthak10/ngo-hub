import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = ({ ngoDetailList }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2, // Partial card view
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box width={"100vw"}  py={3}>
      <Slider {...settings}>
        {ngoDetailList.map((ngo) => (
          <Box key={ngo.id} >
            <Card
              sx={{
                borderRadius: 12,
                height: "100%",
                width:'350px',
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={ngo.src}
                 
                  sx={{
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    objectFit: "contain",
                  }}
                />
                <CardContent sx={{padding:'30px'}}>
                  <Typography fontWeight="bold">{ngo.name}</Typography>
                  <Typography variant="body2" marginTop={'20px'} color="text.secondary">
                    {ngo.description}
                  </Typography>
                  <Box mt={4}>
                     <Typography variant="extraSmall" color="text.secondary">
                     Food Donate
                  </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomSlider;
