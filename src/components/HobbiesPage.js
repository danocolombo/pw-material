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

import TechSledPic from "../assets/TechSled.png";

import KitchenDisplay from "./ui/Kitchen";
import WoodshopDisplay from "./ui/Woodshop";

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
  introParagraph: {
    marginLeft: "10em",
    marginTop: "0em",
    marginBottom: "2em",
  },
  sectionHeader: {
    marginLeft: "5em",
  },
  sectionParagraph: {
    // marginLeft: "5em",
    marginTop: "0em",
    marginBottom: "2em",
    minWidth: "21.5em",
    maxWidth: "21.5em",
  },
  woodPic: {
    marginLeft: "2em",
    width: "100px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
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

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Typography variant="body1" className={classes.introParagraph}>
          There are times of hard work, but there also has to be a balance of
          difference. The moments of just escaping from the moment into a
          healthy interaction. Not to waste time, but also to get some sense of
          acheivement and accomplishment. These are a few of my favorite
          things...
        </Typography>
      </Grid>
      <Grid item>
        {/*-----Woodshop Block-----*/}
        <Typography variant="h2" className={classes.sectionHeader}>
          Woodworking
        </Typography>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="top"
          direction="row"
        >
          <Grid>
            <Typography className={classes.sectionParagraph}>
              It started all the way back in middle school, or what we used to
              call Junior High. It was a great class that gave me a sense of
              worth and accomplishment. To be able to make something that I
              could say was mine, felt so good.
              <br />
              That outlet has been dormant for decades and life got busy, but in
              the last few years of battling the pandemic of COVID, I have found
              my way back.
              <br />
              Not just just waste time, or get my mind off things, but to
              actually be creative and produce and construct from nothing to
              something.
            </Typography>
          </Grid>
          <Grid><img
              className={classes.woodPic}
              alt="Tech Sled"
              src={TechSledPic}
              // width="250em"
            /></Grid>
        </Grid>
      </Grid>
      >
      <Grid item>
        {/*-----Homework Block-----*/}
        <Typography variant="h2" className={classes.sectionHeader}>
          Homework
        </Typography>
        <Typography className={classes.sectionParagraph}>Homework</Typography>
      </Grid>
      <Grid item>
        {/*-----Kitchen Block-----*/}
        <Typography variant="h2" className={classes.sectionHeader}>
          Kitchen
        </Typography>
        <Typography className={classes.sectionParagraph}>Kitchen</Typography>
      </Grid>
    </Grid>
  );
}
