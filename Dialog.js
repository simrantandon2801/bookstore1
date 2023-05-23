<Dialog open={showDialog} onClose={handleClose} sx={{width:'500px',height:'280px',justifyContent:'center',margin:'auto',borderRadius:'0px 0px 12px 12px'}}>
						<DialogTitle sx={{ background: '#3A81F3', color: '#FFFFFF', textAlign: 'center' }}>
						<Grid container lg={12} xs={12}>
							<Grid item lg={10} xs={10}>
							Contact Us
							</Grid>
							<Grid item lg={2} xs={2}>
							<Button onClick={handleClose}><CloseIcon sx={{color:'#FFFFFF'}} /></Button>
			 
								</Grid>
								</Grid></DialogTitle>
        <DialogContent >
							  <DialogContentText>
								<Grid container lg={12}>
									<Grid container lg={10} sx={{margin:'auto'}}>
									
									<Grid item lg={10} sx={{margin:'auto'}}>
	  <Button  href={`mailto:${emailAddress}`} style={{color:"black",textTransform:'none',fontSize:mobile?'14px':"18px",fontWeight:'600'}} ><EmailOutlinedIcon />Abhijeet@Hubhawks.com</Button>
	  </Grid>
	  		<Grid item lg={8} sx={{margin:'auto'}}>
	  <Button href={`tel:${phoneNumber}`} style={{color:"black",fontSize:mobile?'14px':"18px",fontWeight:'600'}} ><PhoneInTalkOutlinedIcon/>+91-7060495034</Button>
	  </Grid>
									</Grid>
								</Grid>
								  
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
