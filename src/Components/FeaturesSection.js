import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import pic from "../Assests/Screenshot_2024-07-16_093244-removebg-preview (1).png"
const FeaturesSection = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
              Key Features
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem'} }}>
              We offer best services
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
            </Typography>

            <Box display="flex" alignItems="center" mb={2}>
              <LocationOnIcon sx={{ fontSize: { xs: 10, md: 10 }, color: 'white', mr: 2,background:"#ff5722" , height:"70px", width:"70px", borderRadius:"16px" }} />
              <Box>
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  We offer best services
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                  Lorem Ipsum is not simply random text
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <EventIcon sx={{ fontSize: { xs: 10, md: 10 }, color: 'white', mr: 2, background:"#facd49",height:"70px", width:"70px", borderRadius:"16px" }} />
              <Box>
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  Schedule your trip
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                  It has roots in a piece of classical
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <LocalOfferIcon sx={{ fontSize: { xs: 10, md: 10}, color: 'pink', mr: 2 , background:"#f85e9f", height:"70px", width:"70px", borderRadius:"16px"}} />
              <Box>
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  Get discounted coupons
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                  Lorem Ipsum is not simply random text
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center' }}>
            <img
              src={pic}
              alt="Paradise on Earth"
              style={{ width: '100%', borderRadius: '10px', maxWidth: '100%' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturesSection;
