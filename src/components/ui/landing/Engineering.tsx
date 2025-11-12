// React import not required in newer JSX runtimes but keep file typed
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useLandingStyles from '../landingStyles';
import ButtonArrow from '../ButtonArrow';

import background from '../../../assets/creativeInspiration.jpg';
const mobileBackground = background;

type Props = { setValue: (v: number) => void };

export default function EngineeringDisplay({ setValue }: Props) {
  const classes = useLandingStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      className={classes.background}
      sx={{
        backgroundImage: `url(${matchesMD ? mobileBackground : background})`,
      }}
    >
      <Box className={classes.introWrapper}>
        <Typography variant="h4" className={classes.introductionParagraph}>
          to contribute to something that makes a real difference in other people's lives
        </Typography>
        <Box alignItems="center" display="flex" justifyContent="center">
          <div className={classes.buttonContainer}>
            <Link to="/engineering" onClick={() => setValue(2)} style={{ textDecoration: 'none' }}>
              <Button className={classes.engineeringButton} variant="outlined" component="span">
                <span style={{ marginRight: 10 }}>Difference</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
              </Button>
            </Link>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
