import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

// import Logo from '../../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    {/* <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack> */}
    <Stack gap='0px'>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" pt="40px">@2022 All Rights Reserved </Typography>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" >Email: bishnukhojwar18@gmail.com</Typography>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" pb="20px">Made with ❤️ by REACT JS</Typography>
    </Stack>
  </Box>
);

export default Footer;
