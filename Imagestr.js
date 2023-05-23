import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { Image } from 'mui-image';
import { useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import 'react-swipeable-views/lib/styles.css';
import { Grid, IconButton, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));
const AutoPlaySwipeableViews = autoPlay(VirtualizeSwipeableViews);

const Imagestr = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const mobile = useMediaQuery('(max-width:600px)');
  const slides = [
    'https://drive.google.com/uc?export=view&id=1Yk5neILuiN5_YCGxriZs72lwC3gWw-5F',
    'https://drive.google.com/uc?export=view&id=1fQ2KPFgK1MaPN1aBzLIlRil7t6C6HyRd',
    'https://drive.google.com/uc?export=view&id=12silTXphI14VfE__aaKCziKeiq-9f4U8',
    'https://drive.google.com/uc?export=view&id=12-aW3r_hHUbL9H4ZKlL7FJNjT5WVERer',
    'https://drive.google.com/uc?export=view&id=16ZQe1vtAQwdxEXB30tTLqjOtIdITSohy',
    'https://drive.google.com/uc?export=view&id=1N2hWpAKRWNiY_bhRBQyGzf63R48uluSa',
    'https://drive.google.com/uc?export=view&id=1N2hWpAKRWNiY_bhRBQyGzf63R48uluSa',
    
    // Add more image URLs as needed
  ];

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };


  const totalSteps = 6; // Replace with the actual number of images in your carousel

  return (
	<Grid container lg={12} xs={10} sx={{margin:'auto',marginTop:mobile?'-80px':'-150px'}} justifyContent="center">
	<Grid item  md={9} xs={11} lg={11} sx={{background: '#D3D9E6',borderRadius:"16px 16px 0px 0px",marginBottom:mobile?'0px':'30px', }}>
			  <Grid container lg={12} xs={12} alignItems="center"sx={{marginBottom:mobile?'20px':'30px'}} >
				  <Grid item lg={12} xs={12} sx={{margin:'auto',marginTop:'20px',marginBottom:'20px'}}>
					  <Typography sx={{fontsize:'18px',fontWeight:'600'}}>Our Bookstore Partners </Typography>
				  </Grid>
				  
            <Grid item lg={0.5} xs={0.5}>
            {!mobile && activeSlide !== 0 && (  <IconButton onClick={handlePrevSlide}>
              <KeyboardArrowLeftIcon />
              </IconButton>)}
              {mobile && activeSlide !== 0 && (  <IconButton onClick={handlePrevSlide}>
                <KeyboardArrowLeftIcon />
              </IconButton>)}
            </Grid>
          
		<Grid item xs={9.5} lg={11} container spacing={2}>
		  {slides.slice(activeSlide, activeSlide + (mobile ? 3 : 6)).map((slide, index) => (
			<Grid key={index} item xs={3} lg={2} sm={6} md={3} sx={{margin:mobile?'auto':''}}>
			  <img src={slide} alt={`Slide ${index + 1}`} style={{ width:mobile?'60px': '140px', height:mobile?'40px':'80px',marginLeft:mobile?'6px':'' }} />
			</Grid>
		  ))}
					  
				  </Grid>
				 
		<Grid item lg={0.5} xs={0.4}>
		  <IconButton onClick={handleNextSlide}>
			<KeyboardArrowRightIcon />
		  </IconButton>
		</Grid>
	  </Grid>
	</Grid>
  </Grid>
  );
};

export default Imagestr;
