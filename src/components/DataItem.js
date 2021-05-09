import React from 'react'
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import FormatColorFillRoundedIcon from '@material-ui/icons/FormatColorFillRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import {
    IconButton,
    Typography,
    CardContent,
    makeStyles,
    CardActions,
    TextField,
    CardHeader,
    Card
} from '@material-ui/core';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useDataContext } from '../utils/dataContext'

const useStyles = makeStyles({
    root: {
        minWidth: 150,
        maxHeight: 300,
        margin: 5,
        padding: 0,
        border: "solid",
        borderRadius: 5,
        borderLeftWidth: 10,
        borderWidth: 0

    },
    header: {
        padding: 0
    },
    content: {
        margin: '-10px 0 ',

        transform: 'scale(0.8)' ,
        padding: 0
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    input: {

    },

});

export default function DataItem({ item, index }) {
    const classes = useStyles();
    const [color, setColor] = React.useState(item.color);
    const [isEditing, setEditing] = React.useState(false)
    const [inputText, setInputText] = React.useState(item.label)
    const inputField = React.useRef(null)

    React.useEffect(() => {
        setInputText(item.label)
        setEditing(false)
        setColor(item.color)
    }, [item])

    const { addData, data } = useDataContext()


    const updateContext = (updatedItem) => {
        let indermidiateData = [...data]
        indermidiateData[index] = updatedItem
        addData(indermidiateData)
        console.log(data)
    }

    const handleInputText = (event) => {
        setInputText(event.target.value)
    }

    const handleSubmit = () => {
        console.log("submited !")
        handleEditing()
        console.log(item)
        updateContext({
            label : inputText ,
            value : item.value , 
            color : color ,
            children : item.children
        })
    }

    const handleEditing = () => {
        console.log(inputField.current)
        setEditing(!isEditing)
    }

    const colorHandler = () => {

    }

    if (isEditing) return (
        <Card className={classes.root} style={{ borderLeftColor: color }}>
            <CardHeader
                className={classes.header}
                action={
                    <div>
                        <IconButton aria-label="edit text" onClick={handleEditing}>
                            <CancelRoundedIcon />
                        </IconButton>
                    </div>
                } />
            <CardContent className={classes.content}>
                <form onSubmit={handleSubmit}>
                    <TextField className={classes.input}
                        ref={inputField}
                        label="update"
                        variant="outlined"
                        onChange={handleInputText}
                        value={inputText}
                    />
                </form>
                

            </CardContent>
        </Card>
    )

    return (
        <Card className={classes.root} style={{ borderLeftColor: color }}>
            <CardHeader
                className={classes.header}
                action={
                    <div>
                        <IconButton aria-label="edit text" onClick={handleEditing}>
                            <EditRoundedIcon />
                        </IconButton>
                        <IconButton aria-label="change color" onClick={colorHandler}>
                            <FormatColorFillRoundedIcon />
                        </IconButton>
                    </div>
                } />
            <CardContent className={classes.content}>
                <Typography variant="h5" component="h2" className={classes.header}>
                    {inputText}
                </Typography>
                <Typography variant="h6" component="h5" className={classes.header} color="textSecondary">
                    {"" + Math.round((item.value * 100 + Number.EPSILON)* 100)   / 100 + "%" }
                </Typography>
            </CardContent>
        </Card>
    )
}
