import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import mobileBackground from "../assets/aci-terzza-sunset.jpg";
import background from "../assets/aci-terzza-sunset.jpg";

import KitchenDisplay from "./ui/Kitchen";
import WoodshopDisplay from "./ui/Woodshop";

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
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "40em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit"
    }
  },
  introductionParagraph: {
    color: theme.palette.common.white,
    marginTop: "10em",
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
    marginTop: "1em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "4em",
    alignItems: "center",
    color: theme.palette.common.orange,
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
    marginBottom: "1em",
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
    padding: "1em",
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
      <Grid item className={classes.background}>
        {" "}
        {/*-----Hero Block-----*/}
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          direction="row"
        >
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h4" align="center" className={classes.introductionParagraph}>
              “Strive for perfection in everything you do. Take the best that
              exists and make it better. When it does not exist, design it.”
            </Typography>
            <Typography variant="subtitle1" className={classes.quoter}>
              Sir Henry Royce
            </Typography>
          </Grid>
          <Grid sm item className={classes.animation}>
            {/* <Lottie options={defaultOptions} height={"50%"} width={"50%"} /> */}
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/*-----The Recovery Block-----*/}
        <Grid
          container
          style={{ height: "40em", marginTop: "0em" }}
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
                  <Typography variant="subtitle1" className={classes.recoveryQutote}>
                    I understood myself only after I destroyed myself; and only<br/>
                    in the process of healing, have I come to know who I really am.
                  </Typography>
                  <Button
                    component={Link}
                    to="/recovery"
                    className={classes.learnButtonRecovery}
                    variant="outlined"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.recoveryBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Woodshop Block-----*/}
        <WoodshopDisplay setValue={props.setValue} />
      </Grid>
      <Grid item>
        {/*-----Kitchen Block-----*/}
        <KitchenDisplay setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
