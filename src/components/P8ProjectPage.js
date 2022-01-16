// Ex 1: Normal Flexbox
// https://react.school/material-ui/grid
import React from "react";
import { useMediaQuery } from "@mui/material";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  item: {
    border: "1px solid blue",
    // flexBasis: '33%',
    // maxWidth: '33%',
  },
  itemFlexGrow: {
    flexGrow: 0,
    flexAlign: "center",
    border: "1px solid blue",
  },
  areaLeft: {
    border: "1px solid blue",
    justifyItems: "center",
    textAlign: "center",
    alignItems: "center",
  },
  areaRight: {
    border: "1px solid blue",
    justifyItems: "center",
    textAlign: "center",
    alignItems: "center",
  },
  flexContainer: {
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
    border: "1px solid blue",
    backgroundColor: "#f1f1f1",
    marginTop: "3em",
    marginBottom: "3em",
    textAlign: "center",
    lineHeight: "75px",
    fontSize: "30px",
    flex: "50%",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      marginBottom: 0,
      flex: "100%",
    },
  },
  flexRight: {
    border: "1px solid blue",
    backgroundColor: "#f1f1f1",
    marginTop: "3em",
    marginBottom: "3em",
    textAlign: "center",
    lineHeight: "75px",
    fontSize: "30px",
    flex: "50%",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      marginBottom: 0,
      flex: "100%",
    },
  },
  flexDiv: {
    border: "1px solid blue",
    backgroundColor: "#f1f1f1",
    // width: "100px",
    marginTop: "3em",
    marginBottom: "3em",
    textAlign: "center",
    lineHeight: "75px",
    fontSize: "30px",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  fContainer: {
    display: "flex",
    flexWrap: "wrap",
    fontSize: "30px",
    textAlign: "center",
    
  },
  
  fItemLeft: {
    backgroundColor: "#f1f1f1",
    // padding: "10px",
    flex: "50%;",
    [theme.breakpoints.down("md")]: {
        flex: "100%",
    },
  },
  
  fItemRight: {
    backgroundColor: "dodgerblue",
    textAlign: "center",
    // padding: "10px",
    flex: "50%;",
    [theme.breakpoints.down("md")]: {
        flex: "100%",
    },
  }
}));

export default function Example1() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
  return (
    <div className={classes.root}>
      <div className={classes.fContainer}>
        <div className={classes.fItemLeft}>
        <Typography variant="body1" className={classes.introText}>
            And the next thing you know,
            <br />
            you're not who you used to be...
          </Typography>
        </div>
        <div className={classes.fItemRight}>GRAPHIC1</div>
      </div>
      

      <h3> Ex 1: Normal Flexbox </h3>
      <div className={classes.flexContainer}>
        <div className={classes.flexLeft}>
          <Typography variant="body1" className={classes.introText}>
            And the next thing you know,
            <br />
            you're not who you used to be...
          </Typography>
        </div>
        <div className={classes.flexRight}>GRAPHIC2</div>
      </div>
      <h3> Ex 1: Normal Flexbox </h3>
      <div className={classes.flexContainer}>
        <div className={classes.flexLeft}>
          <Typography variant="body1" className={classes.introText}>
            And the next thing you know,
            <br />
            you're not who you used to be...
          </Typography>
        </div>
        <div className={classes.flexRight}>GRAPHIC3</div>
      </div>
      <br />
      <Grid container>
        <Grid item sm={12} lg={12}>
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
              : "NADA"}
            <br />
            {/* width: {window.innerWidth} */}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={12} lg={6} className={classes.areaLeft}>
          <Typography variant="body1" className={classes.introText}>
            And the next thing you know,
            <br />
            you're not who you used to be...
          </Typography>
        </Grid>
        <Grid item sm={12} lg={6} className={classes.areaRight}>
          PICTURE
        </Grid>
        <Grid item sm={12} lg={6} className={classes.areaLeft}>
          <Typography variant="body1" className={classes.introText}>
            And the next thing you know,
            <br />
            you're not who you used to be...
          </Typography>
        </Grid>
        <Grid item sm={12} lg={6} className={classes.areaRight}>
          PICTURE
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6} md={3} className={classes.item}>
          <Typography variant="body1">
            Cupidatat est reprehenderit fugiat velit nulla elit incididunt.
            Adipisicing excepteur culpa exercitation nulla. Eu qui dolor veniam
            culpa.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.item}>
          <Typography variant="body1">
            Cupidatat est reprehenderit fugiat velit nulla elit incididunt.
            Adipisicing excepteur culpa exercitation nulla. Eu qui dolor veniam
            culpa.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.item}>
          <Typography variant="body1">
            Cupidatat est reprehenderit fugiat velit nulla elit incididunt.
            Adipisicing excepteur culpa exercitation nulla. Eu qui dolor veniam
            culpa.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.item}>
          <Typography variant="body1">
            Cupidatat est reprehenderit fugiat velit nulla elit incididunt.
            Adipisicing excepteur culpa exercitation nulla. Eu qui dolor veniam
            culpa.
          </Typography>
        </Grid>
      </Grid>
      <br />
    </div>
  );
}
