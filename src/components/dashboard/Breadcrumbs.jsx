import * as React from 'react';
import Box from '@mui/joy/Box';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

export default function BasicBreadcrumbs() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Breadcrumbs
        size="sm"
        aria-label="breadcrumbs"
        separator={<ChevronRightRoundedIcon fontSize="sm" />}
        sx={{
          '--Breadcrumbs-gap': '1rem',
          '--Icon-fontSize': '16px',
          fontWeight: 'lg',
          color: 'neutral.400',
          px: 0,
        }}
      >
        <Link
          underline="none"
          color="neutral"
          fontSize="inherit"
          href="#"
          aria-label="Home"
        >
          <HomeRoundedIcon />
        </Link>
        <Link
          underline="hover"
          color="neutral"
          fontSize="inherit"
          href="#"
        >
          Dashboard
        </Link>
        <Typography fontSize="inherit" variant="soft" color="primary">
          Orders
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
