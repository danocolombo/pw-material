import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import background from "../../assets/kitchenIngredients.svg";
import mobileBackground from "../../assets/kitchenIngredients.svg";

const useStyles = makeStyles(theme => ({
  hobbyButton: {
    ...theme.typography.learnButton,
    fontSize: "1em",
    height: 45,
    paddingleft: 15,
    // padding: 5,
    marginTop: 10,
    backgroundColor: "red",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  kitchenText: {
    color: "white",
    fontSize: "4em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5em"
    }
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
      backgroundAttachment: "inherit",
      height: "30em",
    }
  },
  // estimateButton: {
  //   ...theme.typography.estimate,
  //   borderRadius: 50,
  //   height: 80,
  //   width: 205,
  //   backgroundColor: theme.palette.common.orange,
  //   fontSize: "1.5rem",
  //   marginRight: "5em",
  //   marginLeft: "2em",
  //   "&:hover": {
  //     backgroundColor: theme.palette.secondary.light
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     marginLeft: 0,
  //     marginRight: 0
  //   }
  // }
}));

export default function KitchenDisplay(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

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
            <Typography variant="h2" className={classes.kitchenText}>
              We have to eat...
              <br />
              we don't have to be bored.
            </Typography>
            {matchesMD ? null : <Typography variant="h1" className={classes.supportText}>
              Here are some things that make my life special
            </Typography>}
            <Button
                    component={Link}
                    to="/hobbies"
                    className={classes.hobbyButton}
                    variant="outlined"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Check it out</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.white}
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
