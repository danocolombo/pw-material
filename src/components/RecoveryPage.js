import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

//import animationData from "../animations/landinganimation/data";
import animationData from "../animations/developer/developer.json";
import recoveryBackground from "../assets/repeatingBackground.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButtonRecovery: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
    topMargin: "5em",
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  recoveryQutote: {
    marginBottom: "0px",
  },
  revolutionBackground: {
    backgroundImage: `url(${recoveryBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  recoveryCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    // padding: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  recoveryBackground: {
    backgroundImage: `url(${recoveryBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  quoter: {
    alignItems: "center",
    marginLeft: "15rem",
    fontStyle: "italic",
    fontSize: "2em",
  },
  introParagraph: {
    alignItems: "center",
    paddingTop: "1rem",
    paddingRight: "15rem",
    paddingBottom: "1rem",
    paddingLeft: "15rem",
  },
  SobrietyRecoveryDefs: {
    alignItems: "center",
    // fontFamily: "Tahoma",
    marginTop: "5px",
    marginBottom: "5px",
    fontWeight: 600,
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/*-----The Recovery Block-----*/}
        <Grid
          container
          style={{ height: "15em", marginTop: "0em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.recoveryCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    Recovery Advocate
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    className={classes.recoveryQutote}
                  >
                    I understood myself only after I destroyed myself; and only
                    <br />
                    in the process of healing, have I come to know who I really
                    am.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.recoveryBackground} />
        </Grid>
      </Grid>
      {/* <Grid item>
        <Grid>
          <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          direction="row">
            Left</Grid>
          <Grid>Right</Grid>
        </Grid>
      </Grid> */}
      <Grid item>
        <Grid>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            direction="row"
          >
            <Typography variant="bodyPlain" className={classes.introParagraph}>
              Life was difficult growing up, but you only know what you know. So I had no idea what was going on. 
              Over the decades of my life I struggled with relationships, identity and turned to self-medcate to endure.
              I was a determined, self-reliant person through all my challenges. When I finally got sick and tired 
              of being sick and tired, I began to seek professional help.<br/><br/>
              I know self-medication was not the solution to my struggles in life, but it seemed like it gave me
              the ability to continue on. I came to understand that the self-medication was not the problem, but 
              just a symptom of something bigging going on.<br/><br/>
              Through years of striving and trying, I finally found a program called Celebrate Recovery (CR), that 
              helped me get past my medicating challeenges and was able to get some restoration and healing that was 
              the root of my dysfunciton.
            </Typography>
          </Grid>
          <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          direction="row">
            <Typography variant="subtitle1" className={classes.SobrietyRecoveryDefs}>
              Sobriety: the state of not being intoxicated.<br/>
              Recovery: return to a normal state of health, mind or strength
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      
    </Grid>
  );
}
