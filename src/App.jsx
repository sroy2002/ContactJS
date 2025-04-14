import './App.css'
import Navbar from './Components/Navbar'
import MiniForm from './Components/MiniForm'
import { Container, Box, Typography } from '@mui/material';
function App() {
  return (
    <Box>
      <Navbar/>
      <Container sx={{mt:4, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <Box>
          <Typography variant="h4" sx={{fontSize:50, fontWeight: 900, mb: 6, color: '#135fab'}}>
            Contact Us
          </Typography>
          <MiniForm/>
        </Box>
        <Box sx={{ml: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?t=st=1744471851~exp=1744475451~hmac=3cd4dc528feab56a1b30a707558ce4f17ae581c3a47675b35cdb12b6318eaec9&w=826" alt="Contact Us" style={{width: 580, height: 580}} />
        </Box>
      </Container>
    </Box>
  )
}

export default App
