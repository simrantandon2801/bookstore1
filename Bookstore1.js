import React from 'react'
import Dashboard_au from '../Dashboard_author/Dashboard_author'
import { Box } from '@mui/system';
import {useMediaQuery} from '@mui/material';
import {Grid} from '@mui/material';
import {Button} from '@mui/material';
import { Autocomplete } from '@mui/material';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {TextField} from '@mui/material';
import {Image} from 'mui-image';
import Footer from '../footer';
import ResponsiveAppBar from './menu';
import CardMedia from '@mui/material/CardMedia';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import {Paper} from '@mui/material';
import Imagestr from './Imagestr';
function Bookstore1  ()  {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showGrid, setShowGrid] = useState(false);
  const mobile = useMediaQuery('(max-width:600px)');
    const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
    const handleChange11 = (event, value) => {
      setSelectedOptions(value);
      navigate(`../${value}`);
  }
  const navigate = useNavigate();
  const handleExplore =  (e) => {
  navigate('/Editing')
};
  const ServicesE = [
      
    ];
	return (
	  
   <>
     <ResponsiveAppBar/>
			<Box sx={{ bgcolor: '#F3F5F9', width: mobile?"100%":"75%",height:mobile?'880px':'900px' }}>
				<Grid container lg={12}>
     <Grid item lg={12} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'center',fontSize:mobile?'20px':'36px',lineHeight:mobile?'24px':'48px',fontWeight:mobile?'600':'600',marginTop:"80px"}}>Bookstore</Typography>
        </Grid>
		</Grid>
<Grid container lg={8.5} xs={10}  sm={10} md={10} sx={{ margin:'auto',marginTop:'0px'}}>

                <Grid container md={7} xs={11} lg={9.5} sm={7} >
        
        
        <Grid container md={12} xs={12} lg={10.5}>
        <Grid item lg={12} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'26px':'56px'}}>Are you looking to broaden your author platform and wish to reach new readers and communities? How do you make sure that your book stands out in a market that is so saturated?</Typography>
        </Grid>
        <Grid item lg={12} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'26px'}}>Your book is undoubtedly written from your soul, based on decades of experience, and can actually benefit the reader, but none of that counts if it fails to find its way to the right people.</Typography>
        </Grid>
        <Grid item lg={11} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'26px'}}>Using various strategies such as bookstore events, book promotions, fan interactions, discussions, conferences etc. Hubhawks can assist you in developing a relationship with your readers and growing your fan following.</Typography>
        </Grid>
       
       
     
					{mobile?<Grid item xs={12} sx={{marginTop:'56px'}}>
					<Image src="https://drive.google.com/uc?export=view&id=1vxPjioMOUs8gJ8w0HPCXUjCu2G263OsU"
								style={{
									justifyContent: 'space-around', width: mobile ? '228px' : ipad ? "345px" : '483px', height:mobile?"170px":'233px', borderRadius:mobile?'0px': "36px",
									marginLeft: mobile ? '31px' : ipad ? "88px" : '0px', marginTop: mobile ? '-2px' : ipad ? "60px" : '18px', zIndex: '1'
								}}
								/>
								<Image height={0} src="https://drive.google.com/uc?export=view&id=1q_ploOzSWjm9XQc-7A5-5JOLlYVtAG55"
								style={{
									justifyContent: 'space-around', width: mobile ? '100px' : ipad ? "345px" : '195px', height: mobile ? '100px' : ipad ? "309px" : '195px', position: 'absolute', borderRadius: "36px",
									marginLeft: mobile ? '31px' : ipad ? "88px" : '0px', marginTop: mobile ? '-2px' : ipad ? "60px" : '18px', top: mobile?"auto":'590px', left: mobile?"1.5vh":'48%'
								}}
							/>
							</Grid>:''}	
        </Grid>
        </Grid>
       
     
        
					{mobile ? "" : <Grid container md={5} xs={11} lg={1} sm={5} sx={{ marginTop: '56px' }}>
        
						<Grid item lg={12} md={12} xs={12} sx={{ textAlign: 'center', }}>
        
				
							<Image src="https://drive.google.com/uc?export=view&id=1vxPjioMOUs8gJ8w0HPCXUjCu2G263OsU"
								style={{
									justifyContent: 'space-around', width: mobile ? '260px' : ipad ? "345px" : '483px', height: mobile ? '233px' : ipad ? "309px" : '350px', position: 'absolute', 
									marginLeft: mobile ? '31px' : ipad ? "88px" : '0px', marginTop: mobile ? '0px' : ipad ? "60px" : '0px', top: '300px', left: '55%', zIndex: '1'
								}}
							/>

							<Image height={0} src="https://drive.google.com/uc?export=view&id=1q_ploOzSWjm9XQc-7A5-5JOLlYVtAG55"
								style={{
									justifyContent: 'space-around', width: mobile ? '260px' : ipad ? "345px" : '195px', height: mobile ? '233px' : ipad ? "309px" : '195px', position: 'absolute', borderRadius: "36px",
									marginLeft: mobile ? '31px' : ipad ? "88px" : '0px', marginTop: mobile ? '-2px' : ipad ? "60px" : '-40px', top: '590px', left: '48%'
								}}
							/>
			
         
						</Grid>
       
					</Grid>}
        </Grid>
		</Box>
    <Imagestr/>
        <Grid container lg={12}>
        <Button
  variant="contained"
  color="primary"
  sx={{
    textTransform: 'none',
    fontWeight: '500',
    fontSize: mobile ? '12px' : '16px',
    borderRadius: '8px',
    height: mobile ? '40px' : '48px',
    display: 'flex',
    margin: '56px auto',
  }}
  onClick={handleExplore}
  endIcon={<KeyboardArrowRightIcon />}
>
  Explore now
</Button>
            </Grid>
      
     <Footer/>
    
		</>
  )
}

export default Bookstore1
