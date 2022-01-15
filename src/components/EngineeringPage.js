import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useMediaQuery } from '@mui/material';

import ButtonArrow from './ui/ButtonArrow';
import engineeringPic from '../assets/computer_glasses.jpg';
import customSoftwareIcon from '../assets/customSoftwareIcon.svg';
import AWSLogo from '../assets/AWS_Logo.svg';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '2em',
        [theme.breakpoints.down('md')]: {
            marginTop: '-2em',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em',
        },
    },
    breadcrumbsContainer: {
        marginLeft: '2em',
        marginTop: '-2em',
    },
    sectionTitle: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: '1em',
        fontFamily: 'Raleway',
        fontSize: '1.75rem',
        color: theme.palette.common.blue,
        fontWeight: 700,
    },
    flexContainer: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: "DodgerBlue",
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    flexLeft: {
        // border: '1px solid blue',
        // backgroundColor: "#f1f1f1",
        marginTop: 0,
        marginBottom: 0,
        textAlign: 'center',
        lineHeight: '75px',
        fontSize: '30px',
        flex: '35%',
        [theme.breakpoints.down('md')]: {
            marginTop: 0,
            marginBottom: 0,
            width: '90%',
            flex: '100%',
        },
    },
    flexRight: {
        // border: '1px solid blue',
        // backgroundColor: "#f1f1f1",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: '2em',
        textAlign: 'left',
        lineHeight: '75px',
        fontSize: '30px',
        flex: '65%',
        [theme.breakpoints.down('md')]: {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            width: '100%',
            textAlign: 'center',
            flex: '100%',
        },
    },
    sectionText: {
        fontSize: '1.25rem',
        color: theme.palette.common.black,
        fontWeight: 400,
    },
    graphic: {
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
            marginTop: '1em',
        },
    },
    quoted: {
        fontStyle: 'italic',
    },
}));

export default function EngineeringPage(props) {
    const classes = useStyles();
    const theme = useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.mainContainer}>
            <Grid item className={classes.breadcrumbsContainer}>
                <Breadcrumbs aria-label='breadcrumb'>
                    <Link underline='hover' color='inherit' href='/'>
                        Main
                    </Link>
                    <Typography color='text.primary'>Engineering</Typography>
                </Breadcrumbs>
            </Grid>
            {/** //   SECTION 1 */}
            <Typography className={classes.sectionTitle}>
                Software Engineering
            </Typography>
            <div className={classes.flexContainer}>
                <div className={classes.flexLeft}>
                    <Typography className={classes.sectionText}>
                        “Strive for perfection in everything you do. Take the
                        best that exists and make it better. When it does not
                        exist, design it.”
                    </Typography>
                    <Typography variant='subtitle1' className={classes.quoted}>
                        Sir Henry Royce
                    </Typography>
                </div>
                <div className={classes.flexRight}>
                    <img
                        className={classes.graphic}
                        alt='desktop view'
                        src={engineeringPic}
                        height='200px'
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
                        Leader in Cloud Technology. Experience through the
                        stack.
                    </Typography>
                    <Typography className={classes.sectionText}>
                        Design, architecture, development and delivery.
                        {matchesSM ? null : <br />}Not just training.
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
                            alt='mobile phone icon'
                            src={AWSLogo}
                            width='250em'
                        />
                    </Grid>
                    {/* )} */}
                </div>
            </div>
            {/** //   SECTION 3 */}
            <Typography className={classes.sectionTitle}>
                Custom Software
            </Typography>
            <div className={classes.flexContainer}>
                <div className={classes.flexLeft}>
                    <Typography className={classes.sectionText}>
                        Save Energy. {matchesSM ? null : <br />}Save Time.{' '}
                        {matchesSM ? null : <br />}Save Money.
                    </Typography>
                    <Typography className={classes.sectionText}>
                        Complete digital solutions, from investigation to{' '}
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
                        alt='custom software icon'
                        src={customSoftwareIcon}
                        width='250em'
                    />
                </div>
            </div>
        </div>
    );
}
