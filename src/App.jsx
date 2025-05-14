import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import theme from './config/theme'
import AppRouter from './routes/AppRouter'

function App() {

  return (
    <>
       <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
    </ThemeProvider>
    </>
  )
}

export default App
