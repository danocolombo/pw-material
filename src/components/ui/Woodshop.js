import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import background from "../../assets/woodshop.svg";
import mobileBackground from "../../assets/woodshop.svg";

const useStyles = makeStyles(theme => ({
  hobbyButton: {
    ...theme.typography.learnButton,
    fontSize: "1em",
    height: 45,
    marginTop: 20,
    paddingLeft: 15,
    backgroundColor: "yellow",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  buttonArrow: {
    width: 15,
    height: 15,
    fill: theme.palette.common.black
  },
  titleText: {
    color: "white",
    fontSize: "4em",
  },
  supportText: {
    color: "white",
    fontSize: "2rem",
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0
    }
  }
}));

export default function WoodshopDisplay(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit"
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2" className={classes.titleText}>
              There is a time for everything...
            </Typography>
            <Typography variant="h1" className={classes.supportText}>
              It is just real pleasing to take a mental break and do something physical.<br/>
              I find a peaceful place in the woodshop
            </Typography>
            <Button
                    component={Link}
                    to="/hobbies"
                    className={classes.hobbyButton}
                    variant="outlined"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Check it out</span>
                    <ButtonArrow className={classes.buttonArrow}
                      width={15}
                      height={15}
                      fill={theme.palette.common.black}
                    />
                  </Button>
            <Grid container justify={matchesSM ? "center" : undefined} item>
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        
      </Grid>
    </Grid>
  );
}
