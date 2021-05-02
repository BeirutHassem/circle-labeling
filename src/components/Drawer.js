import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    ListItemIcon,
    ListItemText,
    ListItem,
    IconButton,
    Divider,
    Drawer,
    Typography,
    Toolbar,
    List,
    SvgIcon ,
    AppBar,
    CssBaseline
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PieContainer from './PieContainer';
import DataList from './DataList';
//import CircleChart from './CircleChart'
import CircleAlgo1 from './CircleAlgo1'
import CirlceAlgo2 from './CirlceAlgo2'
import CircleLabelList from './CircleLabelList'
import CircleEngleText from './CircleEngleText'
import CirclerAroundText from './CirclerAroundText'
import { useDataContext } from '../utils/dataContext'
import randomizeData from "../utils/randomizeData"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'center',
    },
    container: {
        display: "flex",
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 100,
        marginLeft: 40,
        alignItems: 'center'

    },
    dataList: {
        display: "block",

    },
    content: {

        alignSelf: 'center',
        marginTop: 20,
        margin: 20,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),


    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const { addData, data } = useDataContext()

    const [open, setOpen] = React.useState(false);

    const randData = () => {
        addData(randomizeData())
    }

    const updateText = () => {
        let triy = data 
        triy[2].label = "ayoub nitoru"
        addData(triy)
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >

                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Circle Labeling
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>

                </div>
                <Divider />
                <List>
                    {['Randomize slice weights', 'Zoom', 'Remove overlaps'].map((text, index) => (
                        <ListItem button={true} key={text} onClick={updateText}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    <ListItem button={true} key={'Randomize'} onClick={randData}>
                        <ListItemIcon><SvgIcon></SvgIcon></ListItemIcon>
                        <ListItemText primary={'Randomize'} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['Merge', 'Splite', 'Insert Data'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}

                </List>
            </Drawer>

            <div className={classes.container} >
                <div className={classes.dataList}>
                    <DataList />
                </div>

                <div className={classes.content}>
                    <PieContainer className={classes.content} >
                        <CircleEngleText />
                    </PieContainer>
                </div>
                <div className={classes.content}>
                    <PieContainer className={classes.content} >
                        <CircleLabelList />
                    </PieContainer>
                </div>
                <div className={classes.content}>
                    <PieContainer className={classes.content}  >
                        <CircleAlgo1 />
                    </PieContainer>
                </div>
                <div className={classes.content}>
                    <PieContainer className={classes.content}>
                        <CirlceAlgo2 />
                    </PieContainer>
                </div>
                <div className={classes.content}>
                    <PieContainer className={classes.content} >
                        <CirclerAroundText />
                    </PieContainer>
                </div>
            </div>
        </div>
    );
}