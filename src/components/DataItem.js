import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 20,
        maxHeight: 200,
        margin: 5,
        paddingTop : 0 , 
        border: "solid",
        borderRadius: 5 ,
        borderLeftWidth : 6 ,
        borderWidth : 1

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
       

    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

});

export default function DataItem({ item }) {
    const classes = useStyles();
    return (
        <Card className={classes.root} style={{ borderLeftColor: item.color }}>
            <CardContent className={classes.bullet}>
                <Typography variant="h5" component="h2">
                    {item.label}
                </Typography>
            </CardContent>
        </Card>
    )
}
