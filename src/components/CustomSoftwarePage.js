import React, { useEffect } from "react";
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
  mainContainer: {
    marginTop: "2em",
    [theme.breakpoints.down("md")]: {
      marginTop: "-2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  breadcrumbsContainer: {
    marginLeft: "2em",
  },
  sectionTitleOne: {
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
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  paragraphOne: {
    // border: '1px solid blue',
    // backgroundColor: "#f1f1f1",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "1.2em",
    marginRight: "1em",
    textAlign: "left",
    lineHeight: "75px",
    fontSize: "25px",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      marginBottom: 0,
      width: "80%",
      // flex: "100%",
    },
  },
  bulletContainerOne: {
    // border: "1px solid blue",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    fontSize: "20px",
    // justifyContent: "left",
    // backgroundColor: "DodgerBlue",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px",
      // width: "80%",
    },
  },
  bulletListOne: {
    // border: '1px solid blue',
    // backgroundColor: "#f1f1f1",
    // marginTop: 0,
    // marginBottom: 0,
    // textAlign: "left",
    // alignItems: "left"
    // lineHeight: "75px",
    // fontSize: "30px",
    // flex: "35%",
    // [theme.breakpoints.down("md")]: {
    //   marginTop: 0,
    //   marginBottom: 0,
    //   width: "90%",
    //   flex: "100%",
    // },
  },
  sectionTitleTwo: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: "3em",
    fontFamily: "Raleway",
    fontSize: "1.5rem",
    color: theme.palette.common.blue,
    fontWeight: 700,
  },
  flexContainerTwo: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: "5em",
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // [theme.breakpoints.down("md")]: {
    //   flexDirection: "column",
    // },
  },
  paragraphTwo: {
    // border: '1px solid blue',
    // backgroundColor: "#f1f1f1",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: "1em",
    textAlign: "left",
    lineHeight: "75px",
    fontSize: "25px",
    [theme.breakpoints.down("md")]: {
      // marginTop: 0,
      // marginBottom: 0,
      // width: "80%",
      // flex: "100%",
    },
  },
  customerNeed: {
    // // border: '1px solid blue',
    // // backgroundColor: "#f1f1f1",
    // marginTop: 0,
    marginBottom: "1em",
    // marginLeft: 0,
    // marginRight: "1em",
    // textAlign: "left",
    // lineHeight: "75px",
    // fontSize: "25px",
    fontWeight: "bold",
    paddingLeft: "25px",
    [theme.breakpoints.down("md")]: {
      // marginTop: 0,
      // marginBottom: 0,
      // width: "80%",
      // flex: "100%",
    },
  },
  bulletContainerTwo: {
    // border: "1px solid blue",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: "75px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    fontSize: "20px",
    // justifyContent: "left",
    // backgroundColor: "DodgerBlue",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px",
      // width: "80%",
    },
  },
}));

export default function EngineeringPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  //   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.mainContainer}>
      <Grid item className={classes.breadcrumbsContainer}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Main
          </Link>
          <Link underline="hover" color="inherit" href="/engineering">
            Engineering
          </Link>
          <Typography color="text.primary">Custom Software</Typography>
        </Breadcrumbs>
      </Grid>
      {/* //   =================================== */}
      {/* //   Paragraph 1                         */}
      {/* //   =================================== */}
      <Typography className={classes.sectionTitleOne}>
        Custom Software Development
      </Typography>
      <div className={classes.flexContainer}>
        <div className={classes.paragraphOne}>
          <Typography
          // variant="subtitle1"
          // className={classes.introductionSection}
          >
            The reality is that software engineering is not just about a clean
            simple design, code, test and deliver on time life. The challenges
            of engineering are taking exising systems and modifying and adapting
            them as needed. Modernizing and improving on systems that are
            already in place.
            <br />
            You might be familiar with the discussions...
          </Typography>
        </div>
      </div>
      <div className={classes.bulletContainerOne}>
        <ul>
          <li>We need to reduce our costs</li>
          <li>One of our components is no longer supported</li>
          <li>We want to add this new feature</li>
          <li>Performance and response times are not acceptable</li>
        </ul>
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.paragraphOne}>
          <Typography
            variant="subtitle1"
            // className={classes.introductionSection}
          >
            And the list goes on. All of these challenges are not your typical
            assignment for someone just getting started in software engineering.
            These challenges take experience, and insights. Through the years I
            have been able to take on these type of challenges and finish with
            satisfaction.
          </Typography>
        </div>
      </div>
      {/* //   =================================== */}
      {/* //   Product Evolution                   */}
      {/* //   =================================== */}
      <Typography className={classes.sectionTitleOne}>
        Product Evolution
      </Typography>
      <div className={classes.flexContainer}>
        <div className={classes.paragraphOne}>
          <Typography>
            Over the years I have been task with working with one software
            solution for managing a client's meetings. It was custom software,
            originally written in PHP with a MySQL database backend.
          </Typography>
        </div>
      </div>
      <Typography className={classes.sectionTitleTwo}>Phase I</Typography>
      <div className={classes.flexContainerTwo}>
        <div className={classes.paragraphTwo}>
          <Typography className={classes.customerNeed}>
            The first desire was to update the user workflows, UI and get off
            the hosted webserver.
          </Typography>
          <Typography>
            This took on a full SDLC approach as user requirements and scope
            definition was defined. The entire PHP frontend was rewritten in in
            React JS (javascript). This front end used what is called the MERN
            stack.
          </Typography>
        </div>
      </div>
      <div className={classes.bulletContainerTwo}>
        <ul>
          <li>
            <b>M</b>ongoDB - document database
          </li>
          <li>
            <b>E</b>xpressJS - Node.js web framework
          </li>
          <li>
            <b>R</b>eactJS - a clicent-side JavaScript framework
          </li>
          <li>
            <b>N</b>odeJS - the premiere JavaScript web server
          </li>
        </ul>
      </div>
      <div className={classes.flexContainerTwo}>
        <div className={classes.paragraphTwo}>
          <Typography>
          This resulted in the client getting a much cleaner,
                            more responsive interface and moved the database
                            from a hosted MySQL database to MongoDB Atlas. The
                            customer was satisfied with the results of phase I.
          </Typography>
        </div>
      </div>
    </div>
  );
}
