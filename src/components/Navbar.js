import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/icons/gym.png'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/'); // initialize active link to '/'

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none'
      }}
      px="20px"
    >
      <Link to="/" onClick={() => handleLinkClick('/')}>
        <img src={Logo} alt="logo" style={{
          width: '48px',
          height: '48px',
          margin: '0px 20px'
        }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: activeLink === '/' ? '3px solid #007DFE' : 'none'
          }}
          onClick={() => handleLinkClick('/')}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: activeLink === '#exercises' ? '3px solid #007DFE' : 'none'
          }}
          onClick={() => handleLinkClick('#exercises')}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;