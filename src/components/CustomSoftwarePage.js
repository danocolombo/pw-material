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
  breadcrumbsContainer: {
    marginLeft: "2em",
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
  introductionSection: {
    marginLeft: "5em",
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
  productEvolutionSection: {
    marginLeft: "3em",
    marginTop: "1em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  productEvolutionParagraph: {
    marginLeft: "2em",
  },
  phaseHeader: {
    marginTop: "1em",
    marginLeft: "1.5em",
  },
  phaseObjective: {
    marginLeft: "5em",
    marginBottom: "2em",
    fontFamily: "Tahoma",
    fontSize: "1.3em",
    fontWeight: "bold",
  },
  phaseParagraph: {
    marginLeft: "5em",
    marginRight: "5em",
  },
  technicalChallenges: {
    fontWeight: "bold",
    marginLeft: "5em",
    marginTop: "2em",
    bottomMargin: "1em",
  },
  techTitle: {
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  techIcon: {
    marginRight: "2em",
    marginLeft: "2em",
    marginBottom: "2em",
    width: "100px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  techDesc: {
    maxWidth: "400px",
  },
  solutionImage: {
    maxWidth: "350px",
    paddingRight: "5em",
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
    <Grid container direction="column">
      <div className={classes.breadcrumbsContainer}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Main
          </Link>
          <Link underline="hover" color="inherit" href="/engineering">
            Engineering
          </Link>
          <Typography color="text.primary">Custom Software</Typography>
        </Breadcrumbs>
      </div>
      <Grid item>
        <Typography
          variant="h2"
          gutterBottom
          style={{
            marginLeft: matchesSM ? 0 : "5rem",
            marginTop: matchesSM ? "1em" : "1em",
          }}
          align={matchesSM ? "center" : undefined}
        >
          Custom Software Development
        </Typography>
        <Typography variant="subtitle1" className={classes.introductionSection}>
          The reality is that software engineering is not just about a clean
          simple design, code, test and deliver on time life. The challenges of
          engineering are taking exising systems and modifying and adapting them
          as needed. Modernizing and improving on systems that are already in
          place.
          <br />
          You might be familiar with the discussions...
          <ul>
            <li>We need to reduce our costs</li>
            <li>One of our components is no longer supported</li>
            <li>We want to add this new feature</li>
            <li>Performance and response times are not acceptable</li>
          </ul>
          And the list goes on. All of these challenges are not your typical
          assignment for someone just getting started in software engineering.
          These challenges take experience, and insights. Through the years I
          have been able to take on these type of challenges and finish with
          satisfaction.
        </Typography>
      </Grid>

      <Grid item>
        {" "}
        {/* //   =================================== */}
        {/* //   Product Evolution                   */}
        {/* //   =================================== */}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.productEvolutionSection}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "2em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h2">Product Evolution</Typography>
            <Typography
              variant="subtitle1"
              className={classes.productEvolutionParagraph}
            >
              Over the years I have been task with working with one software
              solution for managing a client's meetings. It was custom software,
              originally written in PHP with a MySQL database backend.
            </Typography>
          </Grid>
          {/* //   =================================== */}
          {/* //   Product Evolution  - PHASE I        */}
          {/* //   =================================== */}
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "2em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4" className={classes.phaseHeader}>
              Phase I
            </Typography>
            <Typography variant="subtitle1" className={classes.phaseObjective}>
              The first desire was to update the user workflows, UI and get off
              the hosted webserver.
            </Typography>
            <Typography variant="subtitle1" className={classes.phaseParagraph}>
              This took on a full SDLC approach as user requirements and scope
              definition was defined. The entire PHP frontend was rewritten in
              in React JS (javascript). This front end used what is called the
              MERN stack.
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
            </Typography>
            <Typography variant="subtitle1" className={classes.phaseParagraph}>
              This resulted in the client getting a much cleaner, more
              responsive interface and moved the database from a hosted MySQL
              database to MongoDB Atlas. The customer was satisfied with the
              results of phase I.
            </Typography>
            <Typography variant="h6" className={classes.technicalChallenges}>
              Technical Challenges & Highlights
            </Typography>
            <Typography variant="subtitle1" className={classes.phaseParagraph}>
              <ul>
                <li>
                  Migrate MySQL (Relational Database) to MongoDB (Document
                  Database)
                </li>
                <li>
                  Write new database layer in express to replace PHP/MySQL
                  queries
                </li>
              </ul>
            </Typography>
          </Grid>
          {/* //   =================================== */}
          {/* //   Product Evolution  - PHASE II       */}
          {/* //   =================================== */}
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "2em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4" className={classes.phaseHeader}>
              Phase II
            </Typography>
            <Typography variant="subtitle1" className={classes.phaseObjective}>
              Move to standard REST interface and move to AWS no-SQL
            </Typography>
            <Typography variant="subtitle1" className={classes.phaseParagraph}>
              One of the biggest challenges was to migrate from the MongoDB
              document database to the AWS DynamoDB no-sql database. Once the
              data was available, the database calls were abstracted from
              Express and moved to AWS API Gateway and AWS Lambda.
              <br />
              <br />
              This phase also gave us the opportunity to migrate all of the web
              hosting to AWS S3 object storage.
            </Typography>
            <Typography variant="subtitle1" className={classes.phaseParagraph}>
              This phase made the system data now availalbe within the solution,
              but it also now exposed the opportunity for API interactions with
              te data and not have it embedded in the solution stack.
            </Typography>
            <Typography variant="h6" className={classes.technicalChallenges}>
              Technical Challenges & Highlights
            </Typography>
            <Typography variant="subtitle1" className={classes.phaseParagraph}>
              <ul>
                <li>
                  Migrate MongoDB (Document Database) to AWS DynamoDB (NOSQL
                  Database)
                  <br />
                  This data conversion with done in Python.
                </li>
                <li>All API entry points provided in AWS API Gateway</li>
                <li>
                  Database interfaces and business logic moved to AWS Lambda
                  functions
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software"
              src={customSoftwareIcon}
              width="250em"
            />
          </Grid>
        </Grid>
        {/* //   =================================== */}
        {/* //   This is AWS technology section */}
        {/* //   =================================== */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          style={{ marginTop: "5em" }}
        >
          <Grid item>
            <Grid item container>
              <img
                className={classes.techIcon}
                alt="AWS Serverless1"
                src={AWS_Serverless}
                // width="250em"
              />
              <div>
                <div className={classes.techTitle}>Serverless</div>
                <div className={classes.techDesc}>
                  Serverless computing offers a number of advantages over
                  traditional cloud-based or server-centric infrastructure. For
                  many developers, serverless architectures offer greater
                  scalability, more flexibility, and quicker time to release,
                  all at a reduced cost.
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container>
              <img
                className={classes.techIcon}
                alt="AWS Amplify1"
                src={AWS_Amplify}
                // width="250em"
              />
              <div>
                <div className={classes.techTitle}>Amplify</div>
                <div className={classes.techDesc}>
                  Certralized user management, supporting user federation
                  authentication, across platforms and integrating backend
                  services.
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* ===================== END OF TECH APPS ROW 1 ==================*/}
        {/* ====================== START TECH APPS ROW 2 ================== */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Grid item container>
              <img
                className={classes.techIcon}
                alt="AWS API Gateway"
                src={AWS_APIGateway}
                // width="250em"
              />
              <div>
                <div className={classes.techTitle}>API Gateway</div>
                <div className={classes.techDesc}>
                  Certralized user management, supporting user federation
                  authentication, across platforms and integrating backend
                  services.
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container>
              <img
                className={classes.techIcon}
                alt="AWS Lambda"
                src={AWS_Lambda}
                // width="250em"
              />
              <div>
                <div className={classes.techTitle}>Lambdas</div>
                <div className={classes.techDesc}>
                  Certralized user management, supporting user federation
                  authentication, across platforms and integrating backend
                  services.
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* ===================== END OF TECH APPS ROW 2 ==================*/}
        {/* ====================== START TECH APPS ROW 3 ================== */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Grid item container>
              <img
                className={classes.techIcon}
                alt="AWS RDS"
                src={AWS_RDS}
                // width="250em"
              />
              <div>
                <div className={classes.techTitle}>Relational Databases</div>
                <div className={classes.techDesc}>
                  Certralized user management, supporting user federation
                  authentication, across platforms and integrating backend
                  services.
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container>
              <img
                className={classes.techIcon}
                alt="AWS DynamoDB"
                src={AWS_DynamoDB}
                // width="250em"
              />
              <div>
                <div className={classes.techTitle}>No-SQL Database</div>
                <div className={classes.techDesc}>
                  Certralized user management, supporting user federation
                  authentication, across platforms and integrating backend
                  services.
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* ===================== END OF TECH APPS ROW 3 ==================*/}
      </Grid>
      <Grid item>
        {" "}
        {/* //   =================================== */}
        {/* //   This is the solutions section */}
        {/* //   =================================== */}
        <Grid
          container
          direction="row"
          style={{ marginBottom: "10em" }}
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Real Solutions</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Technology and Innovation Collide
            </Typography>
            <Typography variant="subtitle1">
              Integrating serverless components to meet the business needs.
            </Typography>
            <Button
              component={Link}
              to="/websites"
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
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="website icon"
              src={websitesIcon}
            />
          </Grid>
        </Grid>
        {/* //   =================================== */}
        {/* //   This is the P8 Rally section */}
        {/* //   =================================== */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          style={{ marginTop: "0" }}
        >
          <Grid item>
            <Grid item container>
              <img
                className={classes.solutionImage}
                alt="P8 Rally"
                src={P8RallySolution}
              />
              <div>
                <div className={classes.techTitle}>P8 Rally Event System</div>
                <div className={classes.techDesc}>
                  Full serverless solution, providing management of events,
                  leaders and participants.
                </div>
                <Button
                  component={Link}
                  to="/websites"
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
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* ===================== END OF SOLUTION 1 ==================*/}
        {/* ====================== START SOLUTION 2 ================== */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          style={{ marginBottom: "5em", marginTop: "5em" }}
        >
          {/* //   =================================== */}
          {/* //   This is the Meeter section */}
          {/* //   =================================== */}
          <Grid item>
            <Grid item container>
              <div>
                <div className={classes.techTitle}>Meeter Solution</div>
                <div className={classes.techDesc}>
                  Full serverless solution that allows an organization to plan,
                  manage and support meetings, which includes all planning
                  assignments, topical meetings during each event, as well as
                  leadership planning and development.
                </div>
                <Button
                  component={Link}
                  to="/websites"
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
              </div>
              <img
                className={classes.solutionImage}
                alt="Meeter Solution"
                src={MeeterSolution}
                // width="250em"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
