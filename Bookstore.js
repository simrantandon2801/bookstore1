import React from 'react'
//import * as React from 'react';
import { useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { useForm, Controller, FormProvider } from "react-hook-form";
import {  useNavigate } from 'react-router-dom';
import Autocomplete from "@mui/material/Autocomplete";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ResponsiveAppBar from '../components/menu';
import Image from "mui-image";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link, Navigate } from 'react-router-dom';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { borderColor } from '@mui/system';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import DashboardFooter from './DashboardFooter';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Email_URL } from '../components/helper'
import { green, blue, grey, red } from "@mui/material/colors";
import Dashboard_au from './Dashboard_author';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Partner from '../components/Partner';

// const pages = ['Home', 'Services', 'About', 'Contact', 'Blog', 'Signin'];
// const dashboard1=['Editing','CoverDesigning','Translation','GhostWriting','AmazonAds','BookReviews','BookTrailer','BookStore']
// const drawerWidth = 240;
const ServicesE = [
	{ title: "Editing" ,value:'editing'},
	{ title: "Cover Designing"},
	{ title: "Translation" },
	{ title: "Book Store" },
	{ title: "Book Reviews" },{ title: "Book Trailer" },{ title: "Ghost Writing" },{ title: "Amazon Ads" }
  ];


function BookStore(props, status, r, profile) {
	const { register, watch,control,handleSubmit,setValue,reset, formState: { errors } } = useForm();
	const { window } = props;
	const form = useRef();
	const navigate = useNavigate();
	const mobile = useMediaQuery('(max-width:600px)');
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [adventurous, setAdventurous] = useState("");
	const [Autobiographical, setAutobiographical] = useState("");
	const [Biography, setBiography] = useState("");
	const [Candid, setCandid] = useState("");
	const [Classic, setClassic] = useState("");
	const [Coming, setComing] = useState("");
	const [Dark, setDark] = useState("");
	const [Deep, setDeep] = useState("");
	const [Diverse, setDiverse] = useState("");
	const [Educational, setEducational] = useState("");
	const [Empowering, setEmpowering] = useState("");
	const [Fictional, setFictional] = useState("");
	const [Futuristic, setFuturistic] = useState("");
	const [Funny, setFunny] = useState("");
	const [Emotional,setEmotional] = useState("");
	const [selectedOption, setSelectedOption] = useState("");
	const [textInput, setTextInput] = useState("");
	const [user, setUser] = useState({
		to: "rajeevkhanduja@gmail.com",
		subject: "",
		description: "",
		
	});
	const [open, setOpen] = React.useState(false);

	
  
	const handleClose = () => {
		setOpen(false);
		reset();
	};
	const handleChange = (event, newValue) => {
		setValue1(newValue);
	};
	const [value1, setValue1] = React.useState(7);
// 	const [color, setColor] = useState("");
	const [write, setWrite] = useState("");
	const [msg,setMsg] = useState('');
//   const handleColor = () => {
//     setColor("#3A81F3");
//     setTextColor("white");
//   };
const getUserFromToken = () => {
	const token = localStorage.getItem("token");
	console.log(token, 'token');
	if (!token)
		return null;
	try {
		const decoded = jwt_decode(token);
		console.log(decoded, 'toksen');
	  return decoded;
	} catch (error) {
	  console.error(error);
	  return null;
	}
	};
	const [selectedOptions, setSelectedOptions] = useState([]);
	const handleChange11 = (event, value) => {
		setSelectedOptions(value);
		navigate(`../${value}`);
	}
const getUserFromToken1 = () => {
	const gogle = localStorage.getItem("user");
	console.log(gogle, 'token');
	if (!gogle)
		return null;
	try {
		const decoded = jwt_decode(gogle);
		console.log(decoded, 'toksen');
	  return decoded;
	} catch (error) {
	  console.error(error);
	  return null;
	}
  };
const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
	};
	const handlewrite = (event) => {
		setWrite(event.target.value);
	}

	const onSubmit = async (data,e) => {
		const formData = new FormData();
		setOpen(true);
		console.log(data);
		e.preventDefault();
		const user1 = getUserFromToken1();
		const user = getUserFromToken();
		if (user) {
			
			if (!user) return;
			const response = await axios.post(`${Email_URL}/api/email/bookstore`, {
				...data, user
			
			}).then((res) => res.json()).then(async (res) => {
				const resData = await res;
				console.log(resData);
				if (resData.status === "success") {
					alert("Message Sent");
				} else if (resData.status === "fail") {
					alert("Message failed to send");
				}
			})
			console.log(JSON.stringify(data), user, 'rajivk');
		}
		else {
			
			if (user1) {
				const user1 = getUserFromToken1();
			if (!user1) return;
			const response = await axios.post(`${Email_URL}/api/email/bookstoreG`, {
				...data, user1
			
			}).then((res) => res.json()).then(async (res) => {
				const resData = await res;
				console.log(resData);
				if (resData.status === "success") {
					alert("Message Sent");
				} else if (resData.status === "fail") {
					alert("Message failed to send");
				}
			})
			console.log(JSON.stringify(data), user1, 'rajivk');
			}
		}
		console.log(JSON.stringify(data));
		console.log(FormData, 'hi');
	  };
	function colorForStatus(status) {
		switch (status) {
		  case "Adventurous":
		  case "Autobiographical":
			case "Biography":
			case "Candid":
			case "Classic":
			case "Coming":
			case "Dark":
			case "Deep":
			case "Diverse":
			case "Educational":
			case "Empowering":
			case "Fictional":
			case "Futuristic":
			case "Funny":
			case "Emotional":
				
				
			return blue;
		  
		  default:
			return grey;
		}
	}
	const handleLogout = () => {
		localStorage.removeItem("token");
		
		
	};
	const onValueChange=(event)=> {
		setSelectedOption(event.target.value);
		console.log(event.target.value);	
	  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
	};
	const handleClick = () => {
		console.info('You clicked the Chip.');
	  };

//   const drawer = (
//     <div>
// 		  <Toolbar />
// 		  <Box sx={{m:"auto"}}>
// 			  <Image duration={0} src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" style={{
//     width: '98px',
//     height: '105px'
// 			  }}></Image>
		  
//           </Box>
// 	  <Divider />
//       <List>
//         {["Progress", "Marketplace", "FAQ","setting"].map((text, index) => (
// 			<>
				
// 		  <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
// 			</ListItem>
// 				<Divider />
				
// 				</>
// 		))}
			  
// 			  <button onClick={handleLogout}>
// 				<Link to ='/'>Logout</Link>	
// 				</button>
//       </List>
//     </div>
//   );

  const container = window !== undefined ? () => window().document.body : undefined;

	return (<>
		<Dashboard_au />
		<Box sx={{ backgroundImage: "url(https://drive.google.com/uc?export=view&id=1a9C2MSUDCGw-b7DDDTyCRZAcspkMvKWA)", background:mobile?'':'#F3F5F9',backgroundSize:mobile?"100%":'',display:"flex",width:mobile?'auto':'auto',height:mobile?'882px':'1500px'}}>
		{mobile?'':<Grid container md={12} sx={{marginTop:"20px"}}>
				<Grid container md={6}>
					<Grid item md={9} sx={{display:'flex',justifyContent:'end'}}>
					<Typography sx={{fontSize:'36px',color:'#BB0000',fontWeight: '600'}}>Marketplace</Typography>	
					</Grid>
				</Grid>
				<Grid container md={6} sx={{justifyContent:'space-around'}}>
					<Grid item md={6}>
						<Autocomplete
							disableClearable
							value={ServicesE.value}
							onChange={handleChange11}
							style={{ backgroundColor: '#FFFFFF' }}
        options={ServicesE.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
				placeholder="Search for book services"	
            InputProps={{
              ...params.InputProps,
              type: "search"
            }}
          />
        )}
      />
		
					</Grid>
					<Grid item md={4} sx={{display:'flex',justifyContent:"start"}}>
					<Button variant="contained" color="primary" sx={{backgroundColor:'#3A81F3',textDecoration:'none',textTransform:'none',borderRadius:"8px",width:'119px',height:"48px"}}>
            Contact Us
          </Button>
					</Grid>
				</Grid>
			</Grid>}
			<Paper component='form' width="1152px" height='1148px' sx={{
				position: 'absolute',
width: mobile?'272px':'75%',
height:mobile?'775px': '1310px',
left: mobile?'24px':'32px',marginLeft:mobile?'24px':'240px',
top: mobile?'90px':'115px',
background: '#FFFFFF',
borderRadius: '12px'}}>
           	{mobile?<Tabs
					value={value1}
					onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        	<Tab label="Editing" value1='0' style={{textTransform:'none'}} href="/Editing"  />
        <Tab label="Cover Designing" value1='1' style={{textTransform:'none'}}href="/CoverDesigning" />
        <Tab label="Translation" value1='2' style={{textTransform:'none'}}href="/Translation"/>
        <Tab label="Ghost Writing"value1='3'style={{textTransform:'none'}} href= "/GhostWriting"/>
        <Tab label="Amazon Ads"value1='4' style={{textTransform:'none'}}href=  "/AmazonAds"/>
        <Tab label="Book Reviews"value1='5' style={{textTransform:'none'}} href= "/BookReviews"/>
		<Tab label="Book Trailer"value1='6' style={{textTransform:'none'}}href="/BookTrailer" />
		<Tab label="Book store"value1='7' style={{textTransform:'none'}}href= "/Bookstore" />
		</Tabs>
					:
			  <Tabs style={{marginTop:"26px",marginLeft:'38px'}}
							value={value1}
							onChange={handleChange}
				variant="scrollable"
				scrollButtons
				allowScrollButtonsMobile
				aria-label="scrollable force tabs example"
			  >	<Tab label="Editing" value1='0' style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:400}} component={Link} to="/Editing"  />
			  <Tab label="CoverDesigning" value1='1' style={{ textTransform: 'none', color: '#000000', fontSize: '16px', fontWeight: 400 }} component={Link} to="/CoverDesigning" />
				  <Tab label="Translation" value1='2' style={{ textTransform: 'none', color: '#000000', fontSize: '16px', fontWeight: 400 }} component={Link } to="/Translation"/>
<Tab label="Ghostwriting"value1='3'style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:400}} component={Link } to= "/GhostWriting"/>
<Tab label="Amazon Ads"value1='4' style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:400}} component={Link } to=  "/AmazonAds"/>
<Tab label="Book Reviews"value1='5' style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:400}} component={Link } to= "/BookReviews"/>
<Tab label="Book Trailer"value1='6' style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:400}} component={Link }to="/BookTrailer" />
<Tab label="Bookstore"value1='7' style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:600}} component={Link } to= "/Bookstore" />
</Tabs>
				  
				  }

    <Box component='div'  >
		
			<Grid container md={12}>
			 <Grid item md={12} sx={{textAlign:'initial'}}>
			<Typography sx={{marginTop:mobile?'12px':'56px',marginLeft:mobile?'16px':"84px",fontSize:mobile?'12px': '18px'}}>Which is your preferred book store?</Typography>
				</Grid>
				<Grid item md={6} sx={{
					background: '#FFFFFF', border: '1px solid #F1F1F1',marginLeft:mobile?'16px':'84px',marginTop:mobile?'12px':'32px',
borderRadius: '22px'}}>	
					<TextField 
							 required
								id="Summary"
								placeholder='Write here'
							 name="Summary"
						fullWidth
						
						size="small"
						{...register('bookStore')}
						InputProps={{borderRadius:'12px'}}
						
						error={errors.Summary ? true : false}
						
        />
				</Grid> 
		
			</Grid>
			<Grid container md={12}>
			 <Grid item  md={12} sx={{textAlign:'initial'}} >
					<Typography sx={{marginTop:mobile?'12px':"56px",marginLeft:mobile?'16px':"84px",fontSize:mobile?'12px': '18px'}}>Who is the publisher of your book?</Typography>
				</Grid>
				<Grid item md={6} sx={{marginLeft:mobile?'16px':"84px",marginTop:mobile?'':'32px'}}>
						  <TextField  
							 required
							 id="Summary"
							 name="Summary"
							 placeholder='Write the publisher’s name here'
						fullWidth
						size="small"
							 margin="dense"
							 {...register('publisher')}
							 error={errors.Summary ? true : false}
        />
				</Grid> 
		
			</Grid>
			<Grid container md={12} >
			 <Grid item>
						  <Typography sx={{marginTop:mobile?'26px':"68px",marginLeft:mobile?'16px':"84px",fontSize:mobile?'12px': '18px',textAlign:'initial'}}>How many stores would you like to get your book placed at?</Typography>
						  </Grid>
						  <Grid item md={6} sx={{marginLeft:mobile?'16px':"84px",marginTop:mobile?'':'32px'}}><TextField 
							 required
							 id="Summary"
							 name="Summary"
							 placeholder='Write here'
						size="small"
							 fullWidth
							 margin="dense"
							 {...register('bookplaced')}
							 error={errors.Summary ? true : false}
        />
				</Grid> 
		
				  </Grid>
			<Grid container md={12}>
				<Grid item md={12} sx={{textAlign:'initial'}}>
				<Typography sx={{marginTop:mobile?'16px':"56px",marginLeft:mobile?'16px':"84px",fontSize:mobile?'12px': '18px'}}>What kind of promos are you looking for? </Typography>	
				</Grid>
				<Grid item md={6}  sx={{textAlign:'initial',marginLeft:mobile?'16px':"84px",marginTop:mobile?"0px":'16px'}}>
				<label htmlFor="field-rain" style={{marginLeft:'2px',fontSize:mobile?'12px':'18px',lineHeight:mobile?'16px':"28px",marginTop:mobile?'2px':'8px'}}>
                    <input
                        {...register("promos")}
                        type="radio"
                        value="Face-up"
									id="field-rain"
									style={{width:mobile?"8px":'16px',
							height:mobile?"8px":'16px',marginRight:'12px'}}
                    />
                    Face-up
                </label><br/>
                <label htmlFor="field-wind" style={{marginLeft:'2px',fontSize:mobile?'12px':'18px',lineHeight:mobile?'16px':"28px",marginTop:mobile?'2px':'8px'}}>
                    <input
                        {...register("promos")}
                        type="radio"
                        value="Pile-up"
									id="field-wind"
									style={{width:mobile?"8px":'16px',
							height:mobile?"8px":'16px',marginRight:'12px'}}
                    />
                    Pile-up
			</label><br/>
			<label htmlFor="field-wind" style={{marginLeft:'2px',fontSize:mobile?'12px':'18px',lineHeight:mobile?'16px':"28px",marginTop:mobile?'2px':'8px'}}>
                    <input
                        {...register("promos")}
                        type="radio"
                        value="Both"
									id="field-wind"
									style={{width:mobile?"8px":'16px',
							height:mobile?"8px":'16px',marginRight:'12px'}}
                    />
                    Both
			</label>
				</Grid>

			</Grid>
				  
		
			
			
			
			
				
				
				  <Grid container md={12}>
					 
				<Grid item md={12} sx={{textAlign:'initial'}}>
						  <Typography sx={{marginTop:mobile?'26px':"56px",marginLeft:mobile?'16px':"84px",fontSize:mobile?'12px': '18px'}}>Additional comments (Optional)</Typography>
				</Grid>
				<Grid item md={6} sx={{marginLeft:mobile?'16px':"84px",marginTop:mobile?'':'32px'}} >
					<TextField 
							 required
							 id="Comments"
							 name="Comments"
							 placeholder='Write additional comments here'
							fullWidth
							multiline
								rows={mobile ? 3 : 4}
								sx={{width: mobile?'242px':'679px'
								,height:mobile?'90px': '130px'}}
							 margin="dense"
							 {...register('Comments')}
							 error={errors.Comments ? true : false}
        />
				</Grid>
				
					  </Grid>

					  <Grid container md={12}>
					 
					 <Grid item md={12} sx={{textAlign:'initial'}}>
							   <Typography sx={{marginTop:mobile?'26px':"56px",marginLeft:mobile?'16px':"84px",fontSize:mobile?'12px': '18px'}}>Our Bookstore Partners</Typography>
					 </Grid>
					 <Grid item md={6} lg={12} sx={{marginLeft:mobile?'16px':"84px",marginTop:mobile?'':'32px'}} >
					 <Partner />
					 </Grid>
					 
						   </Grid>


					  <Grid container lg={12}>
					
					  </Grid>
					  <Grid container md={12}>
					  <Button
              variant="contained"
              color="primary"
				onClick={handleSubmit(onSubmit)}
				sx={{backgroundColor:'#3A81F3',marginTop:mobile?'24px':'56px',marginLeft:mobile?'16px':'82px',textTransform: 'none',fontWeight:'500',fontSize:mobile?'12px':'18px',borderRadius:'8px',width: mobile?'52px':'91px',
				height: mobile?'36px':'48px'}}
            >
              Submit
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
              <CheckCircleOutlineIcon /> Thank you for your order! We have
              received your order and will process it shortly.
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
		</Box>
			</Paper>
			{/* {mobile?<DashboardFooter />:''}	 */}
			</Box>
		</>
  );
}
export default BookStore;
