import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme, Theme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from '@mui/material';
import { NavigationProps } from '../../types';

import footerAdornment from '../../assets/FooterGraphic.svg';
import linkedIn from '../../assets/LinkedInLogo.png';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            height: '75px',
        },
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21em',
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em',
        },
    },
    mainContainer: {
        position: 'absolute',
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none',
    },
    linkedInIcon: {
        padding: '2px',
        width: '4rem',
        backgroundColor: 'white',
        [theme.breakpoints.down('xs')]: {
            width: '2.5rem',
        },
    },
    gridItem: {
        margin: '3em',
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-2.5em',
        left: '.5em',
        [theme.breakpoints.down('xs')]: {
            height: '70%',
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '1em',
        },
    },
    email: {
        fontSize: '1em',
        color: 'white',
    },
}));

export default function Footer(props: NavigationProps): ReactElement {
    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <footer className={classes.footer}>
            {matchesMD ? null : (
                <Grid
                    container
                    justifyContent='center'
                    className={classes.mainContainer}
                >
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <Link
                                    to='/'
                                    onClick={() => props.setValue(0)}
                                    className={classes.link}
                                >
                                    HOME
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <Link
                                    to='/engineering'
                                    onClick={() => {
                                        props.setValue(1);
                                        props.setSelectedIndex(0);
                                    }}
                                    className={classes.link}
                                >
                                    Engineering
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    to='/aws'
                                    onClick={() => {
                                        props.setValue(1);
                                        props.setSelectedIndex(1);
                                    }}
                                    className={classes.link}
                                >
                                    Amazon Web Services (AWS)
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    to='/customsoftware'
                                    onClick={() => {
                                        props.setValue(1);
                                        props.setSelectedIndex(2);
                                    }}
                                    className={classes.link}
                                >
                                    Custom Software
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    to='/enterprise'
                                    onClick={() => {
                                        props.setValue(1);
                                        props.setSelectedIndex(3);
                                    }}
                                    className={classes.link}
                                >
                                    Enterprise & Beyond
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <Link
                                    to='/recovery'
                                    onClick={() => props.setValue(2)}
                                    className={classes.link}
                                >
                                    Recovery
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <Link
                                    to='/hobbies'
                                    onClick={() => props.setValue(3)}
                                    className={classes.link}
                                >
                                    Hobbies
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    to='/woodshop'
                                    onClick={() => props.setValue(3)}
                                    className={classes.link}
                                >
                                    Woodshop
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    to='/kitchen'
                                    onClick={() => props.setValue(3)}
                                    className={classes.link}
                                >
                                    Kitchen & Grill
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <Link
                                    to='/contact'
                                    onClick={() => props.setValue(4)}
                                    className={classes.link}
                                >
                                    Contact Me
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
            {matchesMD ? null : (
                <img
                    alt='black decorative slash'
                    src={footerAdornment}
                    className={classes.adornment}
                />
            )}
            <Grid
                container
                direction='column'
                justifyContent='flex-start'
                className={classes.socialContainer}
            >
                <Grid
                    item
                    component={'a'}
                    href='https://www.linkedin.com/in/dcolombo/'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <img
                        src={linkedIn}
                        alt='Linked In logo'
                        className={classes.linkedInIcon}
                    />
                </Grid>
                {matchesMD ? (
                    <Grid item>
                        <Typography className={classes.email}>
                            danocolombo@gmail.com
                        </Typography>
                    </Grid>
                ) : null}
            </Grid>
        </footer>
    );
}
