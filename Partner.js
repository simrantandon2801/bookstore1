import React from 'react'
import { Grid,Typography} from '@mui/material'
import {useMediaQuery} from '@mui/material';
import {Image} from 'mui-image';
function Partner  ()  {
    const mobile = useMediaQuery('(max-width:600px)');
  return (
   
       
     <Grid container lg={12}>
  <Grid item lg={12} >
    <Grid container spacing={2} lg={11.5}>
      <Grid item lg={2.5} md={4} sm={6} xs={12} sx={{margin:'auto'}}>
        <Image
          src="https://drive.google.com/uc?export=view&id=1Yk5neILuiN5_YCGxriZs72lwC3gWw-5F"
          style={{ width: '193px', height: '48px' }}
        />
      </Grid>
      <Grid item lg={1.5} md={4} sm={6} xs={12} sx={{margin:'auto'}}>
        <Image
          src="https://drive.google.com/uc?export=view&id=1fQ2KPFgK1MaPN1aBzLIlRil7t6C6HyRd"
          style={{ width: '76px', height: '48px' }}
        />
      </Grid>
      <Grid item lg={1.5} md={4} sm={6} xs={12} sx={{margin:'auto'}}>
        <Image
          src="https://drive.google.com/uc?export=view&id=12silTXphI14VfE__aaKCziKeiq-9f4U8"
          style={{ width: '98px', height: '48px' }}
        />
      </Grid>
      <Grid item lg={2.3} md={4} sm={6} xs={12} sx={{margin:'auto'}}>
        <Image
          src="https://drive.google.com/uc?export=view&id=12-aW3r_hHUbL9H4ZKlL7FJNjT5WVERer"
          style={{ width: '166px', height: '48px' }}
        />
      </Grid>
      <Grid item lg={2} md={4} sm={6} xs={12} sx={{margin:'auto'}}>
        <Image
          src="https://drive.google.com/uc?export=view&id=16ZQe1vtAQwdxEXB30tTLqjOtIdITSohy"
          style={{ width: '154px', height: '48px' }}
        />
      </Grid>
      <Grid item lg={2} md={4} sm={6} xs={12} sx={{margin:'auto'}}>
        <Image
          src="https://drive.google.com/uc?export=view&id=1N2hWpAKRWNiY_bhRBQyGzf63R48uluSa"
          style={{ width: '143px', height: '48px' }}
        />
      </Grid>
    </Grid>
  </Grid>
</Grid>

    
  )
}

export default Partner
