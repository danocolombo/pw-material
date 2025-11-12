import { useEffect } from 'react';
// PageProps not used in this page
import { makeStyles } from '@mui/styles';
import { useTheme, Theme } from '@mui/material/styles';
import Lottie from 'react-lottie';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

import NotFoundAnimation from '@animations/404pageNotFound/data.json';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  breadcrumbsContainer: {
    marginLeft: '2em',
  },
  errorMessage: {
    textAlign: 'center',
    marginBottom: '1em',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '300px',
    },
    [theme.breakpoints.down('xl')]: {
      width: '500px',
    },
  },
  lottieProgrammer: {
    // textAlign: "center",
    // height: "50%",
    // width: "50%",
    // align: "center",
    // alignItems: "center",
    // alignSelf: "center",
    // justifyContent: "center",
    // textAlign: "center",
  },
}));

export default function NotFoundPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Stack direction="column" alignItems="center" sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Lottie
          options={defaultOptions}
          height="200px"
          width="300px"
          className={classes.lottieProgrammer}
        />

        <Typography
          variant={matchesMD ? 'h4' : matchesXL ? 'h2' : 'h1'}
          className={classes.errorMessage}
        >
          FILE NOT FOUND
        </Typography>
      </Box>
    </Stack>
  );
}
