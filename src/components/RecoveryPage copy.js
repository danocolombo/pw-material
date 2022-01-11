import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";


//import animationData from "../animations/landinganimation/data";
import animationData from "../animations/developer/developer.json";
import recoveryBackground from "../assets/repeatingBackground.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "1em",
    alignItems: "left",
    // justify: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: "2px",
      // width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "0em",
    },
  },
  recoveryBlock: {
    height: "15em",
    marginTop: "1em",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "25px",
      marginTop: "5em",
      width: "95%",
    },
  },
  recoveryBackground: {
    backgroundImage: `url(${recoveryBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "95%",
  },
  recoveryCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      width: "60%",
      alignItems: "center",
      justify: "center",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      marginTop: "1em",
      width: "70%",
    },
  },
  introParagraph: {
    alignItems: "center",
    paddingTop: "1rem",
    paddingRight: "15rem",
    paddingBottom: "1rem",
    paddingLeft: "15rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5em",
      paddingRight: "3em",
      paddingLeft: "3em",
    },
  },
  SobrietyRecoveryDefs: {
    alignItems: "center",
    // fontFamily: "Tahoma",
    marginTop: "5px",
    marginBottom: "5px",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
      paddingRight: "3em",
      paddingLeft: "3em",
    },
  },
  breadcrumbsContainer: {
    marginLeft: "2em",
  },

  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
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
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
  const matchesPhone = useMediaQuery(theme.breakpoints.down("phone"));

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
        <Typography variant="subtitle1">
          {matchesXS
            ? "XS    "+ window.innerWidth
            : matchesSM
            ? "SM    "+ window.innerWidth
            : matchesMD
            ? "MD    " + window.innerWidth
            : matchesLG
            ? "LG    " + window.innerWidth
            : matchesXL
            ? "XL    "+ window.innerWidth
            : matchesPhone
            ? "PHONE "+ window.innerWidth
            : "NADA"}
            <br/>
            {/* width: {window.innerWidth} */}
        </Typography>
      </Grid>
      <Grid item className={classes.breadcrumbsContainer}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Main
          </Link>
          <Typography color="text.primary">Recovery</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item>
        {/*-----The Recovery Block-----*/}
        <Grid
          container
          className={classes.recoveryBlock}
          alignItems="center"
          justify="center"
          direction="row"
        >
          <Card className={classes.recoveryCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                alignContent="center"
                justify="center"
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
