// Ex 1: Normal Flexbox
// https://react.school/material-ui/grid
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
    },
    item: {
        border: '1px solid blue',
        // flexBasis: '33%',
        // maxWidth: '33%',
    },
    itemFlexGrow: {
        flexGrow: 0,
        border: '1px solid blue',
    },
}));

export default function Example1() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3> Ex 1: Normal Flexbox </h3>
            <div className={classes.container}>
                <div className={classes.item}> item 1 </div>
                <div className={classes.itemFlexGrow}> item 2 </div>
                <div className={classes.item}> item 3 </div>
            </div>

            <br />
            <Grid container>
                <Grid item xs={12} sm={6} md={3} className={classes.item}>
                    <Typography variant='body1'>
                        Cupidatat est reprehenderit fugiat velit nulla elit
                        incididunt. Adipisicing excepteur culpa exercitation
                        nulla. Eu qui dolor veniam culpa.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.item}>
                    <Typography variant='body1'>
                        Cupidatat est reprehenderit fugiat velit nulla elit
                        incididunt. Adipisicing excepteur culpa exercitation
                        nulla. Eu qui dolor veniam culpa.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.item}>
                    <Typography variant='body1'>
                        Cupidatat est reprehenderit fugiat velit nulla elit
                        incididunt. Adipisicing excepteur culpa exercitation
                        nulla. Eu qui dolor veniam culpa.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.item}>
                    <Typography variant='body1'>
                        Cupidatat est reprehenderit fugiat velit nulla elit
                        incididunt. Adipisicing excepteur culpa exercitation
                        nulla. Eu qui dolor veniam culpa.
                    </Typography>
                </Grid>
            </Grid>
            <br />
        </div>
    );
}
