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
    Checkbox,
    FormHelperText,
    FormControlLabel,
    FormGroup,
    FormControl,
    FormLabel,
    Typography,
    Toolbar,
    Button,
    Modal,
    List,
    SvgIcon,
    AppBar,
    CssBaseline
} from '@material-ui/core';
import { mergeData, spliteData } from '../utils/randomizeData'
import MenuIcon from '@material-ui/icons/Menu';
import PieContainer from './PieContainer';
import DataList from './DataList';
import MergeModal from './MergeModal'
//import CircleChart from './CircleChart'
import CircleAlgo1 from './CircleAlgo1'
import CirlceAlgo2 from './CirlceAlgo2'
import CircleLabelList from './CircleLabelList'
import CircleEngleText from './CircleEngleText'
import CirclerAroundText from './CirclerAroundText'
import { useDataContext } from '../utils/dataContext'
import randomizeData from "../utils/randomizeData"
import SpliteModal from './SpliteModal';
import FontSizeSlider from './FontSizeSlider'
const drawerWidth = 240;

function rand() {
    return Math.round(Math.random() * 20) - 10;
}


function getModalStyle() {
    const top = 30 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(${-top}%, ${-left}%)`,
    };
}
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
        flexWrap: 'nowrap',
        flexDirection: 'column',
        marginTop: 100,
        marginLeft: 40,
        alignItems: 'center'
    },

    pieContainer: {
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
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #eee',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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
    const [openModal, setOpenModal] = React.useState(false);
    const [openModalSplite, setOpenModalSplite] = React.useState(false);

    const randData = () => {
        addData(randomizeData())
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    const handleMergeSubmit = (data, selectedData) => {
        handleModalClose()
        addData(mergeData(data, selectedData))
    }

    const handleSpliteSubmit = (selectedData) => {
        handleModalSpliteClose()
        addData(spliteData(data, selectedData))
    }

    const handleModalSpliteClose = () => {
        setOpenModalSplite(false)
    }

    const handleModalSpliteOpen = () => {
        setOpenModalSplite(true)
    }
    const inputFile = React.useRef(null)
    const [selectedFile, setSelectedFile] = React.useState(null);
    //  inputFile.addEventListener("change", handleFiles, false);
    function handleFiles(e) {
        console.log(e.target.files) /* now you can work with the file list */
        let importedFile = e.target.files[0];
        let reader = new FileReader();
        reader.onload = function () {
            var fileContent = JSON.parse(reader.result);
            console.log(fileContent)
            addData(fileContent)
            //randerTheData(fileContent)
            // Do something with fileContent
            // document.getElementById('json-file').innerHTML = fileContent;  
        };
        reader.readAsText(importedFile);
        setSelectedFile(null)
    }
    const openFileBorwser = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };

    return (

        <div className={classes.root}>
            <CssBaseline />
            <input type='file' id='file'
                accept=".json"
                value={selectedFile}
                ref={inputFile}
                style={{ display: 'none' }}
                onChange={handleFiles} />
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
                        <ListItem button={true} key={text}>
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
                    <ListItem button={true} key={'Insert Data'} onClick={openFileBorwser} >
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={'Insert Data'} />
                    </ListItem>
                    <ListItem button={true} key={'Merge'} onClick={handleModalOpen} >
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={'Merge'} />
                    </ListItem>
                    <ListItem button={true} key={'Splite'} onClick={handleModalSpliteOpen} >
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={'Splite'} />
                    </ListItem>

                </List>
            </Drawer>
            <Modal
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <MergeModal data={data} callBack={handleMergeSubmit} />
            </Modal>

            <Modal
                open={openModalSplite}
                onClose={handleModalSpliteClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <SpliteModal data={data.filter(e => e.children != null)} callback={handleSpliteSubmit} />
            </Modal>

            <div className={classes.container} >
                <div>
                    <div className={classes.dataList}>
                        <DataList />
                    </div>
                </div>
                <FontSizeSlider className={classes.fontSizeSliderStyle}/>
                <div className={classes.pieContainer}>
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
        </div>
    );
}