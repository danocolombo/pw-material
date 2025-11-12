import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useTheme, Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonArrow from './ButtonArrow';
import useMediaQuery from '@mui/material/useMediaQuery';

import background from '../../assets/kitchenIngredients.svg';
const mobileBackground = background;

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  hobbyButton: {
    ...theme.typography.learnButton,
    fontSize: '1em',
    height: 45,
    paddingLeft: 15,
    marginTop: 10,
    backgroundColor: '#d32f2f',
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: 'black',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  kitchenText: {
    color: 'white',
    fontSize: '4em',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5em',
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
}));

export default function KitchenDisplay(props: { setValue: (v: number) => void }) {
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
              <Typography variant="h2" className={classes.kitchenText}>
                We have to eat...
                <br />
                we don't have to be bored.
              </Typography>

              {matchesMD ? null : (
                <Typography variant="h1" className={classes.supportText}>
                  Here are some things that make my life special
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
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.white} />
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
