import React from 'react';
import Lottie from 'react-lottie';
import useLandingStyles from './ui/landingStyles';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import mobileBackground from "../assets/aci-terzza-sunset-mobile.png";
// import background from "../assets/aci-terzza-sunset.jpg";
import background from '../assets/creativeInspiration.jpg';
import mobileBackground from '../assets/creativeInspiration.jpg';

import KitchenDisplay from './ui/Kitchen';
import WoodshopDisplay from './ui/Woodshop';

//import animationData from "../animations/landinganimation/data";
import animationData from '../animations/developer/developer.json';
import recoveryBackground from '../assets/repeatingBackground.svg';

export default function LandingPage(props) {
    const classes = useLandingStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
    const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));
    const matchesXXL = useMediaQuery(theme.breakpoints.down('xxl'));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <Grid container direction='column' className={classes.mainContainer}>
            <div
                className={classes.background}
                style={{
                    backgroundImage: `url(${
                        matchesMD ? mobileBackground : background
                    })`,
                }}
            >
                <div className={classes.introWrapper}>
                    <Typography
                        variant='h4'
                        className={classes.introductionParagraph}
                    >
                        to contribute to something that makes a real difference
                        in other people's lives
                    </Typography>
                    <div align='center'>
                        <div className={classes.buttonContainer}>
                            <Button
                                component={Link}
                                to='/engineering'
                                className={classes.engineeringButton}
                                variant='outlined'
                                align='center'
                                onClick={() => props.setValue(2)}
                            >
                                <span style={{ marginRight: 10 }}>
                                    Difference
                                </span>
                                <ButtonArrow
                                    width={15}
                                    height={15}
                                    fill={theme.palette.common.blue}
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Grid item>
                {/*-----The Recovery Block-----*/}
                <Grid
                    container
                    // style={{ height: "40em", marginTop: "0em" }}
                    // alignItems="center"
                    justifyContent='center'
                    className={classes.recoveryContainer}
                >
                    <Card className={classes.recoveryCard}>
                        <CardContent>
                            <Grid
                                container
                                direction='column'
                                style={{ textAlign: 'center' }}
                            >
                                <Grid item>
                                    <Typography variant='h3' gutterBottom>
                                        Recovery Advocate
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant='subtitle1'
                                        className={classes.recoveryQutote}
                                    >
                                        I understood myself only after I
                                        destroyed myself; and only
                                        <br />
                                        in the process of healing, have I come
                                        to know who I really am.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to='/recovery'
                                        className={classes.learnButtonRecovery}
                                        variant='outlined'
                                        onClick={() => props.setValue(2)}
                                    >
                                        <span style={{ marginRight: 10 }}>
                                            Learn More
                                        </span>
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
                    <div
                        className={classes.recoveryBackground}
                        style={{
                            backgroundImage: `url(${recoveryBackground})`,
                        }}
                    />
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
