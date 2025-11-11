import React, { useEffect, useMemo, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { NavigationProps } from '../../types';

import logo from '../../assets/dcLogo.png';

interface ElevationScrollProps {
    children: React.ReactElement;
}

function ElevationScroll({ children }: ElevationScrollProps) {
    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
    return React.cloneElement(children as any, { elevation: trigger ? 4 : 0 });
}

type NavChild = { label: string; to: string; selectedIndex: number };
type NavItem = {
    label: string;
    to: string;
    valueIndex: number;
    children?: NavChild[];
};

export default function Header({
    value,
    setValue,
    selectedIndex,
    setSelectedIndex,
}: NavigationProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();
    const iOS =
        typeof window !== 'undefined' &&
        /iPad|iPhone|iPod/.test(navigator.userAgent);

    const nav: NavItem[] = useMemo(
        () => [
            { label: 'Home', to: '/', valueIndex: 0 },
            {
                label: 'Engineering',
                to: '/engineering',
                valueIndex: 1,
                children: [
                    {
                        label: 'Engineering',
                        to: '/engineering',
                        selectedIndex: 0,
                    },
                    { label: 'AWS Cloud', to: '/aws', selectedIndex: 1 },
                    {
                        label: 'Custom Software',
                        to: '/customsoftware',
                        selectedIndex: 2,
                    },
                    {
                        label: 'Enterprise',
                        to: '/enterprise',
                        selectedIndex: 3,
                    },
                ],
            },
            { label: 'Recovery', to: '/recovery', valueIndex: 2 },
            { label: 'Hobbies', to: '/hobbies', valueIndex: 3 },
            { label: 'Contact Me', to: '/contact', valueIndex: 4 },
        ],
        []
    );

    // Keep external value/selectedIndex in sync with current location
    useEffect(() => {
        const pathname = location.pathname;
        const engineeringChild = nav[1].children?.find(
            (c) => c.to === pathname
        );
        if (engineeringChild) {
            if (value !== 1) setValue(1);
            if (selectedIndex !== engineeringChild.selectedIndex)
                setSelectedIndex(engineeringChild.selectedIndex);
            return;
        }
        const top = nav.find((n) => n.to === pathname);
        if (top && value !== top.valueIndex) setValue(top.valueIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    // Menu state for the Engineering dropdown
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const menuOpen = Boolean(menuAnchor);

    // Drawer state
    const [drawerOpen, setDrawerOpen] = useState(false);

    const linkColor = theme.palette.navigation?.nonActiveText || 'black';
    const activeTextColor = theme.palette.navigation?.activeText || 'white';
    const linkActiveColor =
        (activeTextColor || '').toLowerCase() === '#ffffff'
            ? theme.palette.primary.main
            : activeTextColor;

    const isActive = (to: string, exact = false) => {
        const pathname = location.pathname;
        return exact ? pathname === to : pathname.startsWith(to);
    };

    const Brand = (
        <Button
            component={RouterLink as any}
            to='/'
            aria-label='Go to home'
            disableRipple
            sx={{
                p: 0,
                m: 0,
                minWidth: 0,
                gap: 1.5,
                '&:hover': { backgroundColor: 'transparent' },
            }}
            onClick={() => setValue(0)}
        >
            <Box
                component='img'
                src={logo}
                alt='Dano Colombo logo'
                sx={{
                    height: { xs: 48, sm: 56, md: 64 },
                    width: 'auto',
                    display: 'block',
                }}
            />
        </Button>
    );

    const DesktopNav = (
        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
            {nav.map((item) => {
                const hasChildren = !!item.children?.length;
                if (hasChildren) {
                    return (
                        <React.Fragment key={item.label}>
                            <Button
                                color='inherit'
                                aria-controls={
                                    menuOpen
                                        ? 'nav-engineering-menu'
                                        : undefined
                                }
                                aria-haspopup='true'
                                aria-expanded={menuOpen ? 'true' : undefined}
                                onMouseEnter={(e) =>
                                    setMenuAnchor(e.currentTarget)
                                }
                                onClick={(e) => setMenuAnchor(e.currentTarget)}
                                endIcon={<KeyboardArrowDownIcon />}
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    color:
                                        isActive(item.to, true) ||
                                        value === item.valueIndex
                                            ? linkActiveColor
                                            : linkColor,
                                }}
                            >
                                {item.label}
                            </Button>
                            <Menu
                                id='nav-engineering-menu'
                                anchorEl={menuAnchor}
                                open={menuOpen}
                                onClose={() => setMenuAnchor(null)}
                                MenuListProps={{
                                    onMouseLeave: () => setMenuAnchor(null),
                                    'aria-label': 'Engineering',
                                }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                {item.children!.map((child) => (
                                    <MenuItem
                                        key={child.to}
                                        component={RouterLink as any}
                                        to={child.to}
                                        onClick={() => {
                                            setValue(1);
                                            setSelectedIndex(
                                                child.selectedIndex
                                            );
                                            setMenuAnchor(null);
                                        }}
                                        selected={isActive(child.to, true)}
                                    >
                                        {child.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </React.Fragment>
                    );
                }
                return (
                    <Button
                        key={item.label}
                        component={RouterLink as any}
                        to={item.to}
                        sx={{
                            textTransform: 'none',
                            fontWeight: 600,
                            color:
                                isActive(item.to, true) ||
                                value === item.valueIndex
                                    ? linkActiveColor
                                    : linkColor,
                        }}
                        onClick={() => setValue(item.valueIndex)}
                    >
                        {item.label}
                    </Button>
                );
            })}
        </Box>
    );

    const MobileNav = (
        <>
            <IconButton
                aria-label='Open navigation menu'
                sx={{ ml: 'auto', color: linkColor }}
                onClick={() => setDrawerOpen(true)}
            >
                <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                anchor='right'
                open={drawerOpen}
                onOpen={() => setDrawerOpen(true)}
                onClose={() => setDrawerOpen(false)}
            >
                <Box sx={{ ...theme.mixins.toolbar, width: 280 }} />
                <List>
                    {nav.map((item) => {
                        const hasChildren = !!item.children?.length;
                        if (!hasChildren) {
                            return (
                                <ListItem key={item.label} disablePadding>
                                    <ListItemButton
                                        component={RouterLink as any}
                                        to={item.to}
                                        selected={isActive(item.to, true)}
                                        onClick={() => {
                                            setValue(item.valueIndex);
                                            setDrawerOpen(false);
                                        }}
                                    >
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        }
                        return (
                            <React.Fragment key={item.label}>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component={RouterLink as any}
                                        to={item.to}
                                        selected={
                                            value === item.valueIndex &&
                                            isActive(item.to)
                                        }
                                        onClick={() => {
                                            setValue(item.valueIndex);
                                            setDrawerOpen(false);
                                        }}
                                    >
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                {item.children!.map((child) => (
                                    <ListItem key={child.to} disablePadding>
                                        <ListItemButton
                                            sx={{ pl: 4 }}
                                            component={RouterLink as any}
                                            to={child.to}
                                            selected={isActive(child.to, true)}
                                            onClick={() => {
                                                setValue(1);
                                                setSelectedIndex(
                                                    child.selectedIndex
                                                );
                                                setDrawerOpen(false);
                                            }}
                                        >
                                            <ListItemText
                                                primary={child.label}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                                <Divider />
                            </React.Fragment>
                        );
                    })}
                </List>
            </SwipeableDrawer>
        </>
    );

    return (
        <>
            <ElevationScroll>
                <AppBar
                    position='fixed'
                    sx={{
                        zIndex: (t) => t.zIndex.modal + 1,
                        bgcolor: 'background.paper',
                    }}
                >
                    <Toolbar disableGutters sx={{ px: 0 }}>
                        {Brand}
                        {isMobile ? MobileNav : DesktopNav}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {/* Toolbar spacer to push content below fixed AppBar */}
            <Box sx={{ ...theme.mixins.toolbar, mb: { xs: 2, md: 3 } }} />
        </>
    );
}
