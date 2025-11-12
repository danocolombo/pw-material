import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useTheme, Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonArrow from './ButtonArrow';
import useMediaQuery from '@mui/material/useMediaQuery';

import background from '../../assets/woodshop.svg';
import mobileBackground from '../../assets/shoptoolsMobile.png';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  hobbyButton: {
    ...theme.typography.learnButton,
    fontSize: '1em',
    height: 45,
    marginTop: 20,
    paddingLeft: 15,
    backgroundColor: 'yellow',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: 'black',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  buttonArrow: {
    width: 15,
    height: 15,
    fill: theme.palette.common.black,
  },
  titleText: {
    color: 'white',
    fontSize: '4em',
    [theme.breakpoints.down('md')]: {
      fontSize: '2em',
    },
  },
  supportText: {
    color: 'white',
    fontSize: '2rem',
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
      height: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

export default function WoodshopDisplay(props: { setValue: (v: number) => void }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box>
      <Box
        className={classes.background}
        sx={{
          display: 'flex',
          flexDirection: matchesSM ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: matchesSM ? 'center' : 'space-between',
        }}
      >
        <Box
          sx={{
            marginLeft: matchesSM ? 0 : '5em',
            textAlign: matchesSM ? 'center' : 'inherit',
            width: '100%',
          }}
        >
          <Stack direction="column">
            <Box>
              <Typography variant="h2" className={classes.titleText}>
                There is a time for everything...
              </Typography>
              {matchesMD ? null : (
                <Typography variant="h1" className={classes.supportText}>
                  It is just real pleasing to take a mental break and do something physical.
                  <br />I find a peaceful place in the woodshop
                </Typography>
              )}
              <Link
                to="/hobbies"
                onClick={() => props.setValue(2)}
                style={{
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                <Button className={classes.hobbyButton} variant="outlined" component="span">
                  <span style={{ marginRight: 10 }}>Check it out</span>
                  <ButtonArrow
                    className={classes.buttonArrow}
                    width={15}
                    height={15}
                    fill={theme.palette.common.black}
                  />
                </Button>
              </Link>
              <Box sx={{ height: 0 }} />
            </Box>
          </Stack>
        </Box>
        <Box />
      </Box>
    </Box>
  );
}
