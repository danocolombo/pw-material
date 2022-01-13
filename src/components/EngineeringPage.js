import React, { useEffect } from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from "../assets/customSoftwareIcon.svg";
import AWSLogo from "../assets/AWS_Logo.svg";
import GetItDone from "../animations/developer/developer.json";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 0,
    marginLeft: 0,
    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  introText: {
    textAlign: "center",
    marginTop: "2em",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      marginBottom: "1em",
    },
  },
  introGraphic: {
    textAlign: "left",
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    margin: 0,
    // align: "left",
    // alignContent: "left",
    // alignItems: "left",
    // alignSelf: "left",
    // justifyContent: "left",
    // textAlign: "left",
    // [theme.breakpoints.down("md")]: {
    //   align: "center",
    //   alignItems: "center",
    //   alignSelf: "center",
    //   justifyContent: "center",
    //   textAlign: "center",
    // },
  },
  lottieProgrammer: {
    textAlign: "center",
    height: "50%",
    width: "50%",
    align: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  cloudText: {
    // fontSize: "1.7em",
    align: "left",
    paddingLeft: "1em",
    // marginLeft: "1emm",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginBottom: "1em",
      align: "center",
    },
  },
  learnMoreButton: {
    alignItmes: "center",
  },
  cloudGraphic: {
    alignItems: "left",
    marginBottom: "10em",
  },
  softwareText: {
    align: "left",
    paddingLeft: "1em",
    // marginLeft: "1emm",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginBottom: "1em",
      align: "center",
    },
  },

  sizeInfo: {
    marginLeft: "5em",
    marginTop: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      marginLeft: "5em",
    },
  },
  breadcrumbsContainer: {
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      marginLeft: "5em",
    },
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: 0,
    // marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  welcomeMessage: {
    minWidth: "21.5em",
    marginLeft: "0em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  awsSection: {
    marginTop: "1em",
    marginRight: "3em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
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
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

export default function EngineeringPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
  const matchesPhone = useMediaQuery(theme.breakpoints.down("phone"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: GetItDone,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item className={classes.sizeInfo}>
        <Typography variant="subtitle1">
          {matchesXS
            ? "XS    " + window.innerWidth
            : matchesSM
            ? "SM    " + window.innerWidth
            : matchesMD
            ? "MD    " + window.innerWidth
            : matchesLG
            ? "LG    " + window.innerWidth
            : matchesXL
            ? "XL    " + window.innerWidth
            : matchesPhone
            ? "PHONE " + window.innerWidth
            : "NADA"}
          <br />
          {/* width: {window.innerWidth} */}
        </Typography>
      </Grid>
      <Grid item className={classes.breadcrumbsContainer}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Main
          </Link>
          <Typography color="text.primary">Engineering</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid container direction="row">
        {/* //   ========================== */}
        {/* //   Title Section */}
        {/* //   ========================== */}
        <Grid item sm={12}>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              marginLeft: matchesMD ? 0 : "10rem",
              fontSize: "1.7em",
              // marginTop: matchesSM ? "1em" : "2em",
            }}
            align={matchesMD ? "center" : undefined}
          >
            Software Engineering
          </Typography>
        </Grid>
        {/* //   ========================== */}
        {/* //   This is the first section */}
        {/* //   ========================== */}
        <Grid item lg={3} md={12}>
          <Typography variant="body1" className={classes.introText}>
            And the next thing you know,
            <br />
            you're not who you used to be...
          </Typography>
        </Grid>
        <Grid item lg={9} md={12} className={classes.introGraphic}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="top"
            // style={{ minHeight: "100vh" }}
          >
            <Lottie options={defaultOptions} className={classes.lottieProgrammer}/>
          </Grid>
        </Grid>
        {/* //   ========================== */}
        {/* //   This is AWS section        */}
        {/* //   ========================== */}
        <Grid item sm={12}>
          <Typography variant="h2" gutterBottom className={classes.cloudText}>
            AWS Cloud Technology
          </Typography>
        </Grid>
        <Grid item lg={7} md={12}>
          <Typography variant="subtitle1" className={classes.cloudText}>
            Leader in Cloud Technology. Experience through the stack.
          </Typography>
          <Typography variant="subtitle1" className={classes.cloudText}>
            Design, architecture, development and delivery,
            {matchesSM ? null : <br />}not just training.
          </Typography>
          <Button
            component={Link}
            href="/aws"
            to="/aws"
            variant="outlined"
            className={classes.learnMoreButton}
            onClick={() => {
              props.setValue(1);
              props.setSelectedIndex(2);
            }}
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
            {/* <span>Learn More</span> */}
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item lg={5} md={12} className={classes.cloudGraphic}>
          <img
            className={classes.icon}
            alt="mobile phone icon"
            src={AWSLogo}
            width="250em"
          />
        </Grid>
        {/* //   ========================== */}
        {/* //   Custom Software Dev        */}
        {/* //   ========================== */}
        <Grid item sm={12}>
          <Typography variant="h4" className={classes.softwareText}>
            Custom Software Development
          </Typography>
        </Grid>
        <Grid item lg={7} md={12}>
          <Typography variant="subtitle1" className={classes.softwareText}>
            Save Energy. Save Time. Save Money.
          </Typography>
          <Typography variant="subtitle1" className={classes.softwareText}>
            Complete digital solutions, from investigation to{" "}
            <span className={classes.specialText}>celebration.</span>
          </Typography>
          <Button
            component={Link}
            to="/customsoftware"
            href="/customsoftware"
            variant="outlined"
            className={classes.learnButton}
            onClick={() => {
              props.setValue(1);
              props.setSelectedIndex(1);
            }}
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item lg={5} md={12}>
          <img
            className={classes.icon}
            alt="custom software icon"
            src={customSoftwareIcon}
            width="250em"
          />
        </Grid>
        {/* //   ========================== */}
        {/* //   Website Development        */}
        {/* //   ========================== */}
        {/* <Grid item sm={12}>
          <Typography variant="h4">Website Development</Typography>
        </Grid>
        <Grid item lg={7} md={12}>
          <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button
                component={Link}
                to="/websites"
                href="/websites"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
