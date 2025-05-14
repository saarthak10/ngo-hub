import React, { useState } from 'react'
import signUpBackground from '../../assets/signUpBackground.png'
import googleIcon from '../../assets/google_icon.svg'
import eyeOffIcon from '../../assets/eyeoff.svg'
import eyeOnIcon from '../../assets/eyeon.svg'
import { Box, Button, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
const SignUp = () => {
   // Password textfield  type[text:password]
   const [showPassword, setShowPassword] = useState(false)
  return (
    <Grid container sx={{background:`url("${signUpBackground}")`,backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'100vh', justifyContent:'center', alignContent:'center'}}>

        <Grid item size={{xs:4}} p={4} sx={{background:'white' , borderRadius:'15px', justifyContent:'center'}}  >
          <Typography fontSize={'20px'} fontWeight={'bold'} textAlign={'center'}>Create Account</Typography>
          <Box mt={4} textAlign='center'>

          <Button variant='secondary' startIcon={
            <img src={googleIcon}/>
          }> Sign In with Google</Button>
          <Typography mt={2} fontSize={'12px'} color='#B1A0A0'>
            - OR -
          </Typography>
          </Box>
          <Grid size={{xs:12}}  p={6} textAlign={'center'}>
            <TextField type='email' fullWidth placeholder='Email Address'  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '20px', 
                      border: '2px solid #fff',
                      boxShadow: '1px 1px 5px rgba(206, 195, 195, 0.1)', 
                    },
                  }} 
            />  
             <TextField type='password' fullWidth placeholder='Password'  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '20px', 
                      // border: '1px solid #fff',
                      boxShadow: '1px 1px 5px rgba(0,0,0,0.1)', 
                    },
                    marginTop:'20px'
                  }}
                  InputProps={{
                    endAdornment: (
                          <InputAdornment position="end">
                              <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => setShowPassword(!showPassword)}>
                                  {showPassword ? (
                                      <img src={eyeOnIcon} alt="Password" />
                                  ) : (
                                      <img src={eyeOffIcon} alt="Password" />
                                  )}
                              </IconButton>
                          </InputAdornment>
                    )
                  }}

            /> 

          </Grid>  
           <Grid pl={12} pr={12}>
           <Button variant='primary' fullWidth sx={{marginTop:'10px'}}>
              Create Account
            </Button>
            
            </Grid>
        </Grid>
    </Grid>

  )
}

export default SignUp