import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useLandingStyles = makeStyles<Theme>((theme: Theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  background: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    borderRadius: 0,
    height: '40em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundAttachment: 'inherit',
      width: '100%',
      height: '25em',
    },
  },
  introWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
    paddingLeft: '2em',
    paddingRight: '2em',
    justifyContent: 'center',
  },
  introductionParagraph: {
    color: theme.palette.common.white,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      alignContent: 'center',
      alignItems: 'center',
      justify: 'center',
      justifyContent: 'center',
      align: 'center',
      justifyItems: 'center',
      width: '100%',
    },
  },
  engineeringParagraph: {
    color: '#ffffff !important',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      alignContent: 'center',
      alignItems: 'center',
      justify: 'center',
      justifyContent: 'center',
      align: 'center',
      justifyItems: 'center',
      width: '100%',
    },
  },
  quoter: {
    alignItems: 'center',
    marginLeft: '15rem',
    fontStyle: 'italic',
    fontSize: '2em',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      color: theme.palette.common.white,
      textAlign: 'center',
    },
  },
  recoveryContainer: {
    marginTop: '0em',
    alignItems: 'stretch',
    justify: 'center',
    paddingTop: '1em',
    paddingBottom: '1em',
  },
  recoveryCard: {
    position: 'relative',
    zIndex: 1,
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '1em',
    paddingBottom: '2em',
    flex: '1 1 auto',
    maxWidth: '500px',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      paddingTop: '1em',
      paddingBottom: '1em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
      minHeight: 'auto',
    },
  },
  recoveryBackground: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  recoveryQuote: {
    marginBottom: '1em',
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  engineeringButton: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    alignContent: 'center',
    backgroundColor: 'transparent',
    color: '#ffffff !important',
    borderColor: '#ffffff !important',
    padding: 5,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  learnButtonRecovery: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
    topMargin: '5em',
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  mainContainer: {
    marginTop: 0,
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },

  revolutionBackground: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

export default useLandingStyles;
