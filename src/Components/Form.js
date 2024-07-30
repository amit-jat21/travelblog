import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box, Avatar, Paper } from '@mui/material';
import { Call, Email, WhatsApp, Chat, Insights, UploadFile } from '@mui/icons-material';
import wel from '../Assests/welcome-representative-2.svg.png'
import bg from '../Assests/formbg.jpg'
const ConsultationForm = () => {
  return (
    <Container sx={{ my: 5, backgroundImage:{bg}, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '10px',
        padding: '20px'}}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: '10px' }}>
        <Grid container spacing={3}>
          {/* Left Side - Form */}
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Need a Consultation?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Drop us a line! We are here to answer your questions 24/7.
            </Typography>

          
            <Box
              sx={{
                border: '1px dashed #ccc',
                borderRadius: '5px',
                p: 2,
                mb: 3,
                textAlign: 'center',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  cursor: 'pointer'
                }
              }}
            >
              <Typography variant="body2">Drag and drop or <a href="#">browse</a> to upload your file(s)</Typography>
            </Box>

           
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full name"
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root:hover fieldset': { borderColor: '#ff5722' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Company"
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root:hover fieldset': { borderColor: '#ff5722' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Work email"
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root:hover fieldset': { borderColor: '#ff5722' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root:hover fieldset': { borderColor: '#ff5722' } }}
                />
              </Grid>
            </Grid>

            <Button variant="contained" color="warning"   sx={{ mt: 3 , width:"30", display:"flex",justifyContent:"center"}}>
              Send
            </Button>
          </Grid>

         
          <Grid item xs={12} md={4} sx={{background: 'rgba(255, 255, 255, 0.17)',}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Get in touch instantly
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Call sx={{ color: '#007bff', mr: 1 }} />
                <Typography variant="body1"><a href="#">Call us</a></Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ color: '#007bff', mr: 1 }} />
                <Typography variant="body1"><a href="#">Email us</a></Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <WhatsApp sx={{ color: '#25d366', mr: 1 }} />
                <Typography variant="body1"><a href="#">WhatsApp</a></Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Chat sx={{ color: '#007bff', mr: 1 }} />
                <Typography variant="body1"><a href="#">Live chat</a></Typography>
              </Box>

              <Typography variant="h6" gutterBottom>
                For journalists
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Insights sx={{ color: '#007bff', mr: 1 }} />
                <Typography variant="body1"><a href="#">Get unique insights</a></Typography>
              </Box>

              <Typography variant="h6" gutterBottom>
                Join our team
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <UploadFile sx={{ color: '#007bff', mr: 1 }} />
                <Typography variant="body1"><a href="#">Upload your CV</a></Typography>
              </Box>

             
              <Avatar src={wel} sx={{ width: 190, height: 190, mt: 3, float:"right" , marginBottom: "20px", display:"flex",alignItems:"right"}} />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ConsultationForm;
