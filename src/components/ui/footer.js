import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../assets/FooterGraphic.svg";
// import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedIn from "../../assets/LinkedInLogo.png";
import { withThemeCreator } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3rem",
  },
  icon: {
    height: "4rem",
    width: "4rem",
    [theme.breakpoints.down("xs")]: {
        height: "2.5rem",
        width: "2.5rem"
    }
  },
  linkedInIcon: {
    // height: "4rem",
    padding: "2px",
    width: "4rem",
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
        // height: "2.5rem",
        width: "2.5rem"
    }
  },
  socialContainer: {
      position: "absolute",
      marginTop: "-3rem",
      left: ".5em",
      justifyContent: "flex-start",
      [theme.breakpoints.down("xs")]: {
        left: "4px",
        marginTop: "-35px"
    }
  },
}));
export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
                className={classes.link}
              >
                HOME
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                to="/engineering"
                className={classes.link}
              >
                Engineering
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                to="/aws"
                className={classes.link}
              >
                Amazon Web Services (AWS)
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                to="/integrations"
                className={classes.link}
              >
                Integrations
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                to="/enterprise"
                className={classes.link}
              >
                Enterprise & Beyond
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/recovery"
                className={classes.link}
              >
                Recovery
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/recovery"
                className={classes.link}
              >
                Celebrate Recovery
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/hobbies"
                className={classes.link}
              >
                Hobbies
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/woodshop"
                className={classes.link}
              >
                Woodshop
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/kitchen"
                className={classes.link}
              >
                Kitchen & Grill
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(4)}
                to="/contact"
                className={classes.link}
              >
                Contact Me
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        alt="decorative graphic"
        src={footerAdornment}
      />
      <img
        style={{width: "50px"}}
        alt="decorative graphic"
        src={linkedIn}
      />
      <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item component={"a"} href="https://www.linkedin.com/in/dcolombo/" rel="noopener noreferrer" target="_blank">
            <img src={linkedIn} alt="Linked In logo" className={classes.linkedInIcon}/>

        </Grid>
      </Grid>
    </footer>
  );
}
