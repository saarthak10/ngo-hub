import {createTheme} from "@mui/material"
import {grey} from "@mui/material/colors"


let theme = createTheme({

    palette:{
        primary:{
            main: "#FF0090",
            normal:"#E6EAEE",
            white:'#fff'
        },
        secondary:{
            main: "#FCFCFC"
        },
        neutral:{
            light:grey[50],
            medium: grey[200],
            normal: "#D1D3D5",
            main: grey[900]
        },
        green:{
            main: "#67E6AE"
        },
        overrides: {
            MuiButton: {
              raisedPrimary: {
                color: '#000000',
              },
            },
          }
    }

})


theme = createTheme(theme,{
    typography:{
        fontFamily:'DM Sans',
        link:{
            fontSize: '0.8rem',
            [theme.breakpoints.up('md')]:{
                fontSize:'0.9rem'
            },
            fontWeight:500,
            color: theme.palette.primary.main,
            display:'block',
            cursor:'pointer'
        },
        cardTitle:{
            fontSize:'1.2rem',
            display:'block',
            fontWeight: 200
        },
        h6:{
            fontSize:'1rem'
        },
        h7:{
            fontSize:'0.8rem'
        },
        h8:{
            fontSize:'0.7rem'
        },
        labelSmall:{
            fontWeight: '900',
            [theme.breakpoints.up('xs')]: {
                fontSize: '0.8rem'
            },
            [theme.breakpoints.up('sm')]: {
            fontSize: '1rem'
            }
        },
        labelLarge:{
            fontWeight: '700',
            [theme.breakpoints.up('xs')]: {
                fontSize: '20px'
            },
            [theme.breakpoints.up('sm')]: {
            fontSize: '24px'
            },
            [theme.breakpoints.up('md')]: {
            fontSize: '24px'
            },
            [theme.breakpoints.up('lg')]: {
            fontSize: '30px'
            }
        },
        extraLarge:{
            fontWeight: '700',
            // wordWrap: 'break-word',
            [theme.breakpoints.up('xs')]: {
                fontSize: '18px'
            },
            [theme.breakpoints.up('sm')]: {
            fontSize: '22px'
            },
            [theme.breakpoints.up('md')]: {
            fontSize: '50px'
            },
            [theme.breakpoints.up('lg')]: {
            fontSize: '50px'
            }
        },
        small:{
          fontWeight: '400',
          [theme.breakpoints.up('xs')]: {
              fontSize: '0.8rem'
          },
          [theme.breakpoints.up('sm')]: {
          fontSize: '1rem'
          }
      }
    },

    components:{

        MuiButton: {
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            styleOverrides: {
              primary: {
                boxShadow: 'none',
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                padding:'20px',
                lineHeight: 1,
                borderRadius: '20px',
                height: '51px',
                '&:hover': {
                  boxShadow: 'none'
                },
                '&:disabled': {
                  opacity: 0.5
                },
                [theme.breakpoints.down('sm')]: {
                  height: '48px'
                },
                background: theme.palette.primary.main,
                color: theme.palette.primary.white
              },
              secondary:{
                borderRadius: '30px',
                height: '40px',
                fontSize: '10px',
                textTransform: 'none',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#E4D9D9' 
              },
              tertiary: {
                display:'inline-flex',
                boxShadow: 'none',
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
                padding:'15px',
                lineHeight: 1,
                minWidth:'30px',
                borderRadius: '30px',
                height: '50px',
                '&:hover': {
                  boxShadow: 'none'
                },
                '&:disabled': {
                  opacity: 0.5
                },
                [theme.breakpoints.down('sm')]: {
                  height: '48px'
                },
                background: theme.palette.primary.main,
                color: theme.palette.primary.white
              }
            }
          }
    }
})


export default theme