import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@material-ui/core';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import ButtonArrow from './ui/ButtonArrow';
import GetItDone from '../animations/developer/developer.json';
import AWSLogo from '../assets/AWS_Logo.svg';
import customSoftwareIcon from '../assets/customSoftwareIcon.svg';

const useStyles = makeStyles((theme) => ({
    breadcrumbsContainer: {
        marginLeft: '2em',
    },
    gridContainerMain: {},
    gridItemA: {},
    gridContainerA: {},
    gridItemA1: {
        paddingTop: '6em',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            paddingTop: 0,
        },
    },
    gridItemA2: {},

    gridItemB: {},
    gridContainerB: {},
    gridItemB1: {
        paddingTop: '6em',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            paddingTop: 0,
        },
    },
    gridItemB2: {},

    gridItemC: {},
    gridContainerC: {},
    gridItemC1: {},
    gridItemC2: {},
}));

export default function P8Rally(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
    const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));
    const matchesXXL = useMediaQuery(theme.breakpoints.down('xxl'));
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const defaultOptions = {
        loop: true,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRitght: 'auto',
        autoplay: true,
        animationData: GetItDone,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <Box>
            <Grid
                container
                direction='column'
                className={classes.gridContainerMain}
            >
                <Grid item>
                    <Typography variant='subtitle1'>
                        {matchesXS
                            ? 'XS    ' + window.innerWidth
                            : matchesSM
                            ? 'SM    ' + window.innerWidth
                            : matchesMD
                            ? 'MD    ' + window.innerWidth
                            : matchesLG
                            ? 'LG    ' + window.innerWidth
                            : matchesXL
                            ? 'XL    ' + window.innerWidth
                            : matchesXXL
                            ? 'XXL ' + window.innerWidth
                            : 'NADA'}
                        <br />
                        {/* width: {window.innerWidth} */}
                    </Typography>
                </Grid>
                <Grid item className={classes.breadcrumbsContainer}>
                    <Breadcrumbs aria-label='breadcrumb'>
                        <Link underline='hover' color='inherit' href='/'>
                            Main
                        </Link>
                        <Typography color='text.primary'>Recovery</Typography>
                    </Breadcrumbs>
                </Grid>
                {/*  //   SECTION 1     */}
                <Typography variant='h4'>Software Engineering</Typography>
                <Grid item className={classes.gridItemA}>
                    <Grid
                        container
                        direction='row'
                        columns={{ xs: 1, lg: 2 }}
                        className={classes.gridContainerA}
                    >
                        <Grid item xs={1} lg={1} className={classes.gridItemA1}>
                            <Typography
                                variant='body1'
                                className={classes.introText}
                            >
                                And the next thing you know,
                                <br />
                                you're not who you used to be...
                            </Typography>
                        </Grid>
                        <Grid item xs={1} lg={1} className={classes.gridItemA2}>
                            <Lottie
                                options={defaultOptions}
                                width={
                                    matchesXS
                                        ? '125px'
                                        : matchesMD
                                        ? '200px'
                                        : '300px'
                                }
                                height={
                                    matchesXS
                                        ? '125px'
                                        : matchesMD
                                        ? '200px'
                                        : '300px'
                                }
                                className={classes.lottieProgrammer}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {/*  //   SECTION 2     */}
                <Typography variant='h4'>AWS Cloud Technology</Typography>
                <Grid item className={classes.gridItemB}>
                    <Grid
                        container
                        direction='row'
                        className={classes.gridContainerB}
                    >
                        <Grid item className={classes.gridItemB1}>
                            <Typography
                                variant='subtitle1'
                                className={classes.cloudText}
                            >
                                Leader in Cloud Technology. Experience through
                                the stack.
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                className={classes.cloudText}
                            >
                                Design, architecture, development and delivery,
                                {matchesSM ? null : <br />}not just training.
                            </Typography>
                            <Button
                                component={Link}
                                href='/aws'
                                to='/aws'
                                variant='outlined'
                                className={classes.learnMoreButton}
                                onClick={() => {
                                    props.setValue(1);
                                    props.setSelectedIndex(2);
                                }}
                            >
                                <span style={{ marginRight: 10 }}>
                                    Learn More
                                </span>
                                {/* <span>Learn More</span> */}
                                <ButtonArrow
                                    width={10}
                                    height={10}
                                    fill={theme.palette.common.blue}
                                />
                            </Button>
                        </Grid>
                        {matchesMD ? null : (
                            <Grid item className={classes.gridItemB2}>
                                <img
                                    className={classes.icon}
                                    alt='mobile phone icon'
                                    src={AWSLogo}
                                    width='250em'
                                />
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                {/*  //   SECTION 3     */}
                <Typography variant='h4'>Custom Software</Typography>
                <Grid item className={classes.gridItemC}>
                    <Grid
                        container
                        direction='row'
                        className={classes.gridContainerC}
                    >
                        <Grid item className={classes.gridItemC1}>
                            <Typography
                                variant='subtitle1'
                                className={classes.softwareText}
                            >
                                Save Energy. Save Time. Save Money.
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                className={classes.softwareText}
                            >
                                Complete digital solutions, from investigation
                                to{' '}
                                <span className={classes.specialText}>
                                    celebration.
                                </span>
                            </Typography>
                            <Button
                                component={Link}
                                to='/customsoftware'
                                href='/customsoftware'
                                variant='outlined'
                                className={classes.learnButton}
                                onClick={() => {
                                    props.setValue(1);
                                    props.setSelectedIndex(1);
                                }}
                            >
                                <span style={{ marginRight: 10 }}>
                                    Learn More
                                </span>
                                <ButtonArrow
                                    width={10}
                                    height={10}
                                    fill={theme.palette.common.blue}
                                />
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItemC2}>
                            <img
                                className={classes.icon}
                                alt='custom software icon'
                                src={customSoftwareIcon}
                                width='250em'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
