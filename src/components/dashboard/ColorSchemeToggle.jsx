import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

export default function ColorSchemeToggle(props) {
  const { onClick, sx, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton
        size="sm"
        variant="outlined"
        color="neutral"
        {...other}
        sx={sx}
        disabled
      />
    );
  }

  return (
    <Tooltip title="Change theme" variant="outlined">
      <IconButton
        id="toggle-mode"
        size="sm"
        variant="plain"
        color="neutral"
        {...other}
        onClick={(event) => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
          onClick?.(event);
        }}
        sx={[
          {
            '& > *:first-child': {
              display: mode === 'dark' ? 'none' : 'initial',
            },
            '& > *:last-child': {
              display: mode === 'light' ? 'none' : 'initial',
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <DarkModeRoundedIcon />
        <LightModeRoundedIcon />
      </IconButton>
    </Tooltip>
  );
}
