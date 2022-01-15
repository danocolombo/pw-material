import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import ButtonArrow from "./ui/ButtonArrow";
import GetItDone from "../animations/developer/developer.json";
import engineeringPic from "../assets/computer_glasses.jpg";
import customSoftwareIcon from "../assets/customSoftwareIcon.svg";
import AWSLogo from "../assets/AWS_Logo.svg";
import AWS_SAA_Logo from "../assets/AWS-SolutionArchitect.png";
import AWS_DA_Logo from "../assets/AWS-DeveloperAssociate.png";
import AWS_CP_Logo from "../assets/AWS-CloudPractitioner.png";
import AWS_Serverless from "../assets/AWS_Serverless.svg";
import AWS_Amplify from "../assets/AWS_Amplify.svg";
import AWS_APIGateway from "../assets/AWS_APIGateway.svg";
import AWS_Lambda from "../assets/AWS_Lambda.svg";
import AWS_RDS from "../assets/AWS_RDS.svg";
import AWS_DynamoDB from "../assets/AWS_DynamoDB.svg";
import P8RallySolution from "../assets/P8RallySolution.png";
import MeeterSolution from "../assets/MeeterSolution.png";

import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  breadcrumbsContainer: {
    marginLeft: "2em",
    marginTop: "-2em",
  },
  sectionTitle: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: "1em",
    fontFamily: "Raleway",
    fontSize: "1.75rem",
    color: theme.palette.common.blue,
    fontWeight: 700,
  },
  flexContainer: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    display: "flex",
    flexDirection: "row",
    // height: "200px",
    alignItems: "center",
    // backgroundColor: "DodgerBlue",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  flexLeft: {
    // border: "1px solid blue",
    // backgroundColor: "#f1f1f1",
    marginTop: 0,
    marginBottom: 0,
    textAlign: "center",
    lineHeight: "75px",
    fontSize: "30px",
    flex: "35%",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      marginBottom: 0,
      width: "50%",
      flex: "100%",
    },
  },
  flexRight: {
    // border: "1px solid blue",
    // backgroundColor: "#f1f1f1",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "2em",
    textAlign: "left",
    lineHeight: "75px",
    fontSize: "30px",
    flex: "65%",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      width: "50%",
      textAlign: "center",
      flex: "100%",
    },
  },
  sectionText: {
    fontSize: "1.25rem",
    color: theme.palette.common.black,
    fontWeight: 400,
  },
  graphic: {
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      marginTop: "1em",
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const defaultOptions = {
    loop: true,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRitght: "auto",
    autoplay: true,
    animationData: GetItDone,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={classes.root}>
      <Grid item className={classes.breadcrumbsContainer}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Main
          </Link>
          <Typography color="text.primary">Engineering</Typography>
        </Breadcrumbs>
      </Grid>
      {/** //   SECTION 1 */}
      <Typography className={classes.sectionTitle}>
        Software Engineering
      </Typography>
      <div className={classes.flexContainer}>
        <div className={classes.flexLeft}>
          <Typography className={classes.sectionText}>
            And the next thing you know,
            <br />
            you're not who you used to be...
          </Typography>
        </div>
        <div className={classes.flexRight}>
          {/* <Lottie
            options={defaultOptions}
            width={matchesXS ? "125px" : matchesMD ? "200px" : "300px"}
            height={matchesXS ? "125px" : matchesMD ? "200px" : "300px"}
            className={classes.lottieProgrammer}
          /> */}
          <img
            className={classes.graphic}
            alt="desktop view"
            src={engineeringPic}
            // width="250em"
            height="200px"
          />
        </div>
      </div>
      {/** //   SECTION 2 */}
      <Typography className={classes.sectionTitle}>
        AWS Cloud Technology
      </Typography>
      <div className={classes.flexContainer}>
        <div className={classes.flexLeft}>
          <Typography className={classes.sectionText}>
            Leader in Cloud Technology. Experience through the stack.
          </Typography>
          <Typography className={classes.sectionText}>
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
        </div>
        <div className={classes.flexRight}>
          {/* {matchesMD ? null : ( */}
          <Grid item className={classes.gridItemB2}>
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src={AWSLogo}
              width="250em"
            />
          </Grid>
          {/* )} */}
        </div>
      </div>
      {/** //   SECTION 3 */}
      <Typography className={classes.sectionTitle}>Custom Software</Typography>
      <div className={classes.flexContainer}>
        <div className={classes.flexLeft}>
          <Typography className={classes.sectionText}>
            Save Energy. Save Time. Save Money.
          </Typography>
          <Typography className={classes.sectionText}>
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
        </div>
        <div className={classes.flexRight}>
          <img
            className={classes.icon}
            alt="custom software icon"
            src={customSoftwareIcon}
            width="250em"
          />
        </div>
      </div>
    </div>
  );
}
