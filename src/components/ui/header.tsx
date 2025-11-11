import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavigationProps } from '../../types';

import logo from '../../assets/dcLogo.png';

interface ElevationScrollProps {
    children: React.ReactElement;
}

function ElevationScroll(props: ElevationScrollProps): React.ReactElement {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles((theme: any) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1.25em',
        },
    },
    logo: {
        height: '8em',
        [theme.breakpoints.down('md')]: {
            height: '5em',
        },
        [theme.breakpoints.down('xs')]: {
            height: '5.5em',
        },
        [theme.breakpoints.down('sm')]: {
            height: '6em',
        },
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px',
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: 'white',
        borderRadius: '0px',
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            opacity: 1,
        },
    },
    drawerIcon: {
        height: '50px',
        width: '50px',
        [theme.breakpoints.down('md')]: {
            height: '40px',
            width: '40px',
            marginRight: '1rem',
            marginLeft: '1rem',
        },
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    drawer: {
        backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7,
    },
    drawerItemSelected: {
        '& .MuiListItemText-root': {
            opacity: 1,
        },
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1,
    },
}));

interface MenuOption {
    name: string;
    link: string;
    activeIndex: number;
    selectedIndex: number;
}

interface Route {
    name: string;
    link: string;
    activeIndex: number;
    ariaOwns?: string;
    ariaPopup?: string;
    mouseOver?: (event: React.MouseEvent<HTMLElement>) => void;
    selectedIndex?: number;
}

export default function Header(props: NavigationProps): JSX.Element {
    const classes = useStyles();
    const theme = useTheme();
    const iOS =
        typeof window !== 'undefined' &&
        /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = (
        _e: React.ChangeEvent<{}>,
        newValue: number
    ): void => {
        props.setValue(newValue);
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    };

    const handleMenuItemClick = (
        _e: React.MouseEvent<HTMLElement>,
        i: number
    ): void => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i);
    };

    const handleClose = (_e: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    const menuOptions: MenuOption[] = [
        {
            name: 'Engineering',
            link: '/engineering',
            activeIndex: 1,
            selectedIndex: 0,
        },
        {
            name: 'AWS Cloud',
            link: '/aws',
            activeIndex: 1,
            selectedIndex: 1,
        },
        {
            name: 'Custom Software',
            link: '/customsoftware',
            activeIndex: 1,
            selectedIndex: 2,
        },
        {
            name: 'Enterprise',
            link: '/enterprise',
            activeIndex: 1,
            selectedIndex: 3,
        },
    ];

    const routes: Route[] = [
        { name: 'Home', link: '/', activeIndex: 0 },
        {
            name: 'Engineering',
            link: '/engineering',
            activeIndex: 1,
            ariaOwns: anchorEl ? 'simple-menu' : undefined,
            ariaPopup: anchorEl ? 'true' : undefined,
            mouseOver: (event: React.MouseEvent<HTMLElement>) =>
                handleClick(event),
        },
        { name: 'Recovery', link: '/recovery', activeIndex: 2 },
        { name: 'Hobbies', link: '/hobbies', activeIndex: 3 },
        { name: 'Contact Me', link: '/contact', activeIndex: 4 },
    ];

    useEffect(() => {
        [...menuOptions, ...routes].forEach((route: Route | MenuOption) => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex);
                        if (
                            'selectedIndex' in route &&
                            route.selectedIndex &&
                            route.selectedIndex !== props.selectedIndex
                        ) {
                            props.setSelectedIndex(route.selectedIndex);
                        }
                    }
                    break;
                case '/estimate':
                    props.setValue(5);
                    break;
                default:
                    break;
            }
        });
    }, [props.value, menuOptions, props.selectedIndex, routes, props]);

    const tabs = (
        <React.Fragment>
            <Tabs
                value={props.value}
                onChange={handleChange}
                className={classes.tabContainer}
                indicatorColor='primary'
            >
                {routes.map((route, index) => (
                    <Tab
                        key={`${route.name}${index}`}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mouseOver}
                    />
                ))}
            </Tabs>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
                MenuListProps={{
                    onMouseLeave: handleClose,
                }}
                elevation={0}
                style={{ zIndex: 1302 }}
                keepMounted
            >
                {menuOptions.map((option, i) => (
                    <MenuItem
                        key={`${option.name}${i}`}
                        component={Link}
                        to={option.link}
                        classes={{ root: classes.menuItem }}
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                            handleMenuItemClick(event, i);
                            props.setValue(1);
                            handleClose(event);
                        }}
                        selected={
                            i === props.selectedIndex && props.value === 1
                        }
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map((route) => (
                        <ListItem
                            divider
                            key={`${route.name}${route.activeIndex}`}
                            button
                            component={Link}
                            to={route.link}
                            selected={props.value === route.activeIndex}
                            classes={{ selected: classes.drawerItemSelected }}
                            onClick={() => {
                                setOpenDrawer(false);
                                props.setValue(route.activeIndex);
                            }}
                        >
                            <ListItemText
                                className={classes.drawerItem}
                                disableTypography
                            >
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
            >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button
                            component={Link}
                            to='/'
                            disableRipple
                            onClick={() => props.setValue(0)}
                            className={classes.logoContainer}
                        >
                            <img
                                alt='company logo'
                                className={classes.logo}
                                src={logo}
                            />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}
