import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

//these are for kitchen recipes
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import TechSledPic from "../assets/TechSled.svg";
import CoatRack from "../assets/WS-Coat-Rack.svg";
import ShoeBench from "../assets/WS-Shoe-Bench.svg";
import Desk from "../assets/WS-Desk.svg";
//kitchen images
import SalsaPic from "../assets/kitchen/salsa.svg";
import { autocompleteClasses } from "@mui/material";

//========================================
// * Don' forget this
// ! it will hurt....
// TODO: clean up the unused code
//   if you use 3 spaces you get YELLOW
//+++++++++++++++++++++++++++++++++++++++++

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
    // height: "4rem",
    padding: "2px",
    // width: "4rem",
    height: "400px",
    alignItems: "left",

    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      // height: "2.5rem",
      width: "2.5rem",
    },
  },
  woodGalleryContainer: {
    marginLeft: "20em",
  },
  woodGaleryList: {
    width: 800,
    height: 800,
  },
  recipeContainer: {
    marginLeft: "20em",
  },
  recipeCard: {
    maxWidth: 500,
  },
  recipePic: {
    height: 300,
    // width: 100,
    
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function LandingPage(props) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          <Grid>
            <img
              className={classes.woodPic}
              alt="Tech Sled"
              src={TechSledPic}
            />
          </Grid>
        </Grid>
        <Grid className={classes.woodGalleryContainer}>
          <ImageList className={classes.woodGaleryList}>
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div">
                <Typography variant="h3">Project Galery</Typography>
              </ListSubheader>
            </ImageListItem>
            {woodshopProjectData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=400&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  // subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>

      <Grid item>
        {/*-----Kitchen Block-----*/}
        <Typography variant="h2" className={classes.sectionHeader}>
          Kitchen
        </Typography>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="top"
          direction="row"
        >
          <Grid>
            <Typography className={classes.sectionParagraph}>
              It takes a lot of energy to focus and work hard, then when we have
              a hobby that also requires us eo exert more physical energy, we
              need to re-fuel.
              <br />
              I had to learn to cook at a very young age, and I have always
              enjoyed the challenges of taking a recipe and finishing the dish
              to the end.
              <br />
              <br />
              Now over the years, I have discovered and returned to some special
              recipes, and you will find them below.
            </Typography>
          </Grid>
          <Grid>
            <img
              className={classes.woodPic}
              alt="Tech Sled"
              src={TechSledPic}
            />
          </Grid>
        </Grid>
        <Grid className={classes.recipeContainer}>    
          <Card className={classes.recipeCard}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  FIRE
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <img src={SalsaPic} alt="salsa" className={classes.recipePic}/>
            {/* <CardMedia
              component="img"
              className={classes.recipePic}
              // height="194"
              image= {SalsaPic}
              alt="Hot Salsa"
            /> */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          
        </Grid>
      </Grid>
    </Grid>
  );
}
//woodshop projects
const woodshopProjectData = [
  {
    img: CoatRack,
    title: "Coat Rack",
    author: "@bkristastucchio",
  },
  {
    img: ShoeBench,
    title: "Entry Way Bench",
    author: "@rollelflex_graphy726",
  },
  {
    img: Desk,
    title: "Desk",
    author: "@rollelflex_graphy726",
  },
];
