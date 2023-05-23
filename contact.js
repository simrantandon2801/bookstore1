import React from 'react'
import { Button, Grid, Typography,Paper, Card} from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useForm } from 'react-hook-form';
import Image from 'mui-image';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import { Box } from '@mui/material';
import ResponsiveAppBar from './menu';
import MenuItem from '@mui/material/MenuItem';
import { Email_URL, BASE_URL } from '../components/helper';
import Select from '@mui/material/Select';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Footer from '../footer';
import EmailIcon from '@mui/icons-material/Email';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineRounded';
// import { useDevice } from './Responsive/devices';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const phoneNumber = '+91-7060495034';
const emailAddress = 'Abhijeet@Hubhawks.com';
function Contact() {
	
	const mobile = useMediaQuery('(max-width:600px)');
	const { register, handleSubmit,reset, formState: { errors } } = useForm();
	const onSubmit = async (data,e) => {
		const formData = new FormData();
		console.log(data);
		setOpen(true);
		e.preventDefault();
		
		const response = await fetch(`${Email_URL}/api/email/contactus`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => res.json()).then(async (res) => {
			const resData = await res;
			console.log(resData);
			if (resData.status === "success") {
				alert("Message Sent");
			} else if (resData.status === "fail") {
				alert("Message failed to send");
			}
		})
		console.log(JSON.stringify(data));
		console.log(FormData, 'hi');
	  };
	console.log(errors);
	const [service, setServices] = React.useState('');
	const [open, setOpen] = React.useState(false);

	
  
	const handleClose = () => {
		setOpen(false);
		reset();
	};
	const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
	const handleChange = (event) => {
		setServices(event.target.value);
	  };
	return (<>
	  <ResponsiveAppBar />
	  <Grid container md={12} lg={12} sx={{backgroundImage:'url(https://drive.google.com/uc?export=view&id=1nyM9qCNmvBgU-IEAlcFPHSwJbOT9_UIF)'}} >
		  
			<Grid container lg={6.9} md={6} xs={12} sx={{ alignItems: mobile?'initial':'center' }}>
				<Grid container lg={9.5} md={7.5} xs={9} sx={{marginLeft:'151px',marginTop:"50px"}}>
				<Grid item lg={12} md={12} xs={12} sx={{mt:mobile?'36px': '42px', marginLeft:mobile?'25px':'0px',margin:ipad?'auto':"0px"}}>
				  <Typography variant='h2' style={{
fontStyle: 'normal',
fontWeight: 600,
fontSize: mobile?'32px':ipad?"36px":'36px',textAlign:'initial',
lineHeight: '48px',marginTop:ipad?"42px":'0px',
color: '#BB0000'}}>We would love to hear from you</Typography> 
					</Grid>
					</Grid>
					<Paper sx={{width:'523px',height:'651px',backgroundColor:'#FCF8F8',borderRadius:'15px',marginLeft:'151px',}}>
			<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: '10px', ml:mobile?'0px':ipad?'0px':'0px' }}>
            <Grid container lg={8.1} md={7.5} xs={9} sx={{margin:'auto'}}>
			<Grid container md={12} xs={12} sx={{mt:'36px',mb:'20px'}} >
			<Grid item md={6} xs={6} sx={{textAlign:"initial"}}>
			<Typography variant='h4' sx={{fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Name</Typography>
			</Grid>
			<Grid item md={7} xs={7}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
									placeholder="Enter your full name"
									{...register('Name')}
									size='small'
									sx={{width:mobile?'274px':"363px",height:mobile?'24px':'20px'}}
                />
              </Grid>
              </Grid>
			
						<Grid container md={12} xs={12} sx={{mt:'22px',mb:'10px'}}>
				<Grid item md={8} xs={8} lg={12} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>Email</Typography>
				</Grid>
              <Grid item md={7} xs={7} >
                <TextField
                  required
                  fullWidth
                  name="email"
                  placeholder="Enter your email"
                  type="email"
									id="email"
									{...register('Email')}
													autoComplete="new-password"
									size='small'
									sx={{width:mobile?'274px':"363px",height:mobile?'24px':'20px'}}
                />
				</Grid>
					  </Grid>
					  <Grid container md={12} sx={{mt:'32px',mb:'10px'}}>
				<Grid item md={6} xs={8} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>Phone Number</Typography>
				</Grid>
              <Grid item md={7} xs={7}>
                <TextField
                  required
                  fullWidth
                  
                  placeholder="Enter your PhoneNumber"
                
                  id="password"
									autoComplete="new-password"
									{...register('Phone')}
									size='small'
									sx={{width:mobile?'274px':"363px",height:'36px'}}
                />
				</Grid>
					  </Grid>
					  <Grid container md={12}   sx={{mt:'22px',mb:'10px'}}>
				<Grid item md={6} xs={10} lg={12}>
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize:mobile?'16px': '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>What help do you need</Typography>
				</Grid>
							<Grid item md={7} xs={10} >
							<select  style={{width:mobile?'274px':'364px',height:"40px",textAlign:"initial"}}{...register("Services")}>
									<option value="Editing">Editing</option>
									<option value="Cover Designing">CoverDesigning</option>
		  <option value={"Ghost Writing"}>Ghost Writing</option>
		<option value={"BookStore"}>BookStore</option> 
		<option value={"BookReview"}>BookReview</option>							
		<option value={"BookTrailer"}>BookTrailer</option>
		<option value={"AmazonAds"}>AmazonAds</option>
        <option value={"Translation"}>Translation</option>
      </select>
			  {/* <Select
          labelId="demo-simple-select-label"
										id="demo-simple-select"
										displayEmpty
          value={service}
          sx={{width:mobile?'274px':'364px',height:"40px",textAlign:"initial"}}
										onChange={handleChange}
										
									>
										 <MenuItem value="">
            Please select
          </MenuItem>
          <MenuItem  value="Editing">Editing</MenuItem>
          <MenuItem value={"Cover Designing"}>CoverDesigning</MenuItem>
		  <MenuItem value={"Ghost Writing"}>Ghost Writing</MenuItem>
		<MenuItem value={"BookStore"}>BookStore</MenuItem> 
		<MenuItem value={"BookReview"}>BookReview</MenuItem>							
		<MenuItem value={"BookTrailer"}>BookTrailer</MenuItem>
		<MenuItem value={"AmazonAds"}>AmazonAds</MenuItem>
        </Select> */}
				</Grid>
						</Grid>
						
				<Grid container md={12} sx={{mt:'22px',mb:'10px'}}>
				<Grid item md={6} xs={9}  lg={12}>
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>Additional Comments</Typography>
				</Grid>
              <Grid item md={7} xs={7} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder="Enter Additional Comments"
				  rows={4}
				  multiline
                  id="password"
									autoComplete="new-password"
									{...register('Comments')}
									size='small'
									sx={{width:mobile?'274px':"363px",height:mobile?'180px':'86px'}}
                />
				</Grid>
					  </Grid>
					  
              <Grid item md={8} xs={1} >
			  <Grid container justifyContent="center" md={12}>
              <Grid item md={12} xs={12} sx={{mb:'10px'}}>
									<Button
										onClick={handleSubmit(onSubmit)}
              type="submit"
              fullWidth
              variant="contained"sx={{
				mt: mobile?'-52px':'50px', mb: 1, background: '#3A81F3',textTransform:"none",
				borderRadius: '8px',width:mobile?'274px':'362px',height:mobile?'48px':'48px'}}
			>
			Let's Connect
									</Button>
									
									<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Order Confirmation"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <CheckCircleOutlineIcon /> Thank you for Contacting Us We will Contact You shortly
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Dialog>
              </Grid>
            </Grid>
              </Grid>
				  </Grid>
				  					
          </Box>
		  </Paper>
		  </Grid>
		  <Grid container md={4} lg={4.7} sx={{display:'flex',justifyContent:'initial'}} >
			{mobile?'':<Image src='https://drive.google.com/uc?export=view&id=1ePBp6D_KwJcCp5CuPwrV3Vmmv4jVb6G_' style={{position: 'absolute',
width: '530px',
height: '675px',marginLeft:'0px',marginTop:"0px"
 }}></Image>}
 
		  </Grid>
		</Grid>



		{/*contact us card */}

		<Box sx={{marginLeft:mobile?'18px':'780px',marginTop:mobile?'56px':'-90px',marginBottom:"46px",}}> 
		<Card sx={{
			display: 'flex', backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1AxOewO03xMwdD14Qnz9N8wO62QGbuGDb)',backgroundRepeat:"no-repeat",backgroundSize:mobile?'272px':'100%',width: mobile?'272px':'329px', alignItems:'center',borderRadius: '26px',margin:'auto',
height: mobile?'184px': '138px'}}>
	  
			<Box sx={{ display: 'flex', flexDirection: 'column', }}>
			<CardContent sx={{marginLeft:mobile?'60px':"0px"}}>
					<Typography component="div" sx={{color:'#FFFFFF',
fontStyle: 'normal',
fontWeight: 600,
fontSize: mobile?'20px':'36px'}}>Contact us</Typography>
	
						
						<Button href={`tel:${phoneNumber}`}  style={{color:"#FFFFFF",fontSize:mobile?'14px':"18px",fontWeight:'600'}} ><LocalPhoneIcon/>+91-7060495034</Button>
					
						<Button  href={`mailto:${emailAddress}`}style={{color:"#FFFFFF",textTransform:'none',fontSize:mobile?'14px':"18px",fontWeight:'600'}} ><EmailIcon />sales@Hubhawks.com</Button>
					
					
				
				</CardContent>
				</Box>
			</Card>
			</Box>
		<Footer />
	  </>
  )
}
export default Contact;
