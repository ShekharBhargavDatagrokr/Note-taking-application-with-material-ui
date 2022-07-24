import React from 'react';
import { Card, IconButton, Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';
import { blue, green, red, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
    test:{
        border:(note) =>{
            if(note.category == 'work'){
                return '1px solid red'
            }
            if(note.category == 'todos'){
                return '1px solid yellow'
            }
            if(note.category == 'reminders'){
                return '1px solid green'
            }
            if(note.category == 'money'){
                return '1px solid blue'
            }
        }
    },
    avatarColor:{
        backgroundColor:(note) =>{
            if(note.category =='work'){
                return red[500]
            }
            if(note.category =='todos'){
                return yellow[700]
            } 
            if(note.category =='reminders'){
                return green[700]
            }
            return blue[500]       
        }
    }
})

export default function NoteCard({note, handleDelete}){
    const classes = useStyles(note)
    return (
        <div>
            <Card elevation={1} className={classes.test}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatarColor}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    } 
                    action={
                        <IconButton onClick ={()=> handleDelete(note.id)}>
                        <DeleteOutlinedIcon />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant='body2' color="textSecondary">
                        {note.detail}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}