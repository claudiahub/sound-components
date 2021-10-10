import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import VintageRecorder from './components/VintageRecorder';
import './global.css';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/claudiahub">
        Claudia Bressi
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Visualize your music
        </Typography>
         <VintageRecorder/>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
