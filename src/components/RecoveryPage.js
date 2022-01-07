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
  recoveryCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
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
  findGroupButtom: {
    ...theme.typography.goButton,
    backgroundColor: theme.palette.common.red,
    fontSize: "0.7rem",
    height: 35,
    width: 200,
    textAlign: "center",
    padding: 5,
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
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
              Life has been a challenge and my childhood was difficult, but I
              never knew. We only know what we know. Our only reference we have
              for reality is what we experience. So I had no idea what was going
              on. Over the decades of my life I struggled with relationships,
              identity and turned to self-medcate to endure. I was a determined,
              self-reliant person through all my challenges. When I finally got
              sick and tired of being sick and tired, I began to seek
              professional help.
              <br />
              <br />I knew self-medication was not the solution to my struggles
              in life, but it seemed like it gave me the ability to continue on.
              I came to understand that my tendency to self-medicate was not the
              problem, but just a symptom of something bigger going on.
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            direction="row"
          >
            <Typography
              variant="subtitle1"
              className={classes.SobrietyRecoveryDefs}
            >
              Sobriety: the state of not being intoxicated.
              <br />
              Recovery: return to a normal state of health, mind or strength
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            direction="row"
          >
            <Typography variant="bodyPlain" className={classes.introParagraph}>
              Through years of striving and trying, I finally found a program
              called Celebrate Recovery (CR), that helped me get past my
              medicating challeenges and deal with the root of the challenges
              and get some restoration and healing. The truth is, I did not even
              know change was possible, I just figured I had to deal with my
              hurts, habits and hang-ups on my own with a goal of just getting
              by.
              <br />
              <br />
              Contact me if you want some more information, or click the "Find a
              Group" link below.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          direction="row"
        >
          <Button
            component={Link}
            to="https://locator.crgroups.info/"
            className={classes.findGroupButtom}
            variant="outlined"
            // onClick={() => props.setValue(2)}
          >
            <span style={{ marginRight: 10 }}>Find A Group</span>
            <ButtonArrow
              width={15}
              height={15}
              fill={theme.palette.common.white}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
