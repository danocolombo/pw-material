import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useLandingStyles from '@components/ui/landingStyles';
import ButtonArrow from '@components/ui/ButtonArrow';

import recoveryBackground from '@assets/backgrounds/darksand.jpg';

export default function RecoveryDisplayed() {
  const classes = useLandingStyles();
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      gap={3}
      className={classes.recoveryContainer}
      sx={{ position: 'relative', minHeight: '450px' }}
    >
      <Box
        className={classes.recoveryBackground}
        sx={{
          backgroundImage: `url(${recoveryBackground})`,
          position: 'absolute',
          zIndex: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Card className={classes.recoveryCard}>
        <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Stack direction="column" sx={{ textAlign: 'center', flex: 1 }}>
            <Box>
              <Typography variant="h3" gutterBottom>
                Disciple of Jesus
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="subtitle1" className={classes.recoveryQuote} sx={{ mb: 2 }}>
                A passionate follower of Jesus, the Christ; walking in His ways, learning daily.
              </Typography>
              <a
                href="https://wmogcolumbus.fortsonguru.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button className={classes.learnButtonRecovery} variant="outlined" component="span">
                  <span style={{ marginRight: 10 }}>Seek</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              </a>
            </Box>
          </Stack>
        </CardContent>
      </Card>
      <Card className={classes.recoveryCard}>
        <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Stack direction="column" sx={{ textAlign: 'center', flex: 1 }}>
            <Box>
              <Typography variant="h3" gutterBottom>
                Recovery Advocate
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="subtitle1" className={classes.recoveryQuote} sx={{ mb: 2 }}>
                I understood myself only after I destroyed myself; and only in the process of
                healing, have I come to know who I really am.
              </Typography>
              <a
                href="https://recovery.fortsonguru.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button className={classes.learnButtonRecovery} variant="outlined" component="span">
                  <span style={{ marginRight: 10 }}>Discover</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              </a>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

{
  /* <div className={classes.landingHeroSection}>
        <div className={classes.landingHeroTextContainer}>
          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <a
                href="https://wmogcolumbus.fortsonguru.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', lineHeight: 0 }}
              >
                <img
                  src={wmogLogo}
                  alt="WMOG Logo"
                  style={{ maxWidth: '200px', display: 'block' }}
                />
              </a>
              <p style={{ fontSize: '18px', margin: 0, color: '#000' }}>Men's Bible Study</p>
            </div>
          </div>
        </div>
      </div>
 */
}
