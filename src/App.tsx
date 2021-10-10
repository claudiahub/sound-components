import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from './components/Copyright';
import Recorder from './components/Recorder';
import './global.css';

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Visualize your music
        </Typography>
         <Recorder/>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
