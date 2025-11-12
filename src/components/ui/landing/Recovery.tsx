import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useLandingStyles from '@components/ui/landingStyles';
import ButtonArrow from '@components/ui/ButtonArrow';

import recoveryBackground from '@assets/repeatingBackground.svg';

type Props = { setValue: (v: number) => void };

export default function RecoveryDisplayed({ setValue }: Props) {
  const classes = useLandingStyles();
  const theme = useTheme();

  return (
    <Box>
      {/*-----The Recovery Block-----*/}
      <Box display="flex" justifyContent="center" className={classes.recoveryContainer}>
        <Card className={classes.recoveryCard}>
          <CardContent>
            <Stack direction="column" sx={{ textAlign: 'center' }}>
              <Box>
                <Typography variant="h3" gutterBottom>
                  Recovery Advocate
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" className={classes.recoveryQuote}>
                  I understood myself only after I destroyed myself; and only
                  <br />
                  in the process of healing, have I come to know who I really am.
                </Typography>
                <Link to="/recovery" onClick={() => setValue(2)} style={{ textDecoration: 'none' }}>
                  <Button
                    className={classes.learnButtonRecovery}
                    variant="outlined"
                    component="span"
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                  </Button>
                </Link>
              </Box>
            </Stack>
          </CardContent>
        </Card>
        <Box
          className={classes.recoveryBackground}
          sx={{ backgroundImage: `url(${recoveryBackground})` }}
        />
      </Box>
    </Box>
  );
}
