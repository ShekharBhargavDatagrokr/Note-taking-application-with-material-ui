import React from 'react';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import format from 'date-fns/format';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        page:{
            background:'#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer:{
            width: drawerWidth
        },
        root:{
            display: 'flex',
        },
        drawerPaper:{
            width: drawerWidth
        },
        active:{
            background: '#f4f4f4'
        },
        title:{
            padding:theme.spacing(2)
        },
        appBar:{
            //width: `calc(100% -${drawerWidth}px)`
            width: `calc(100% - 240px)`
        },
        toolbar: theme.mixins.toolbar,
        date:{
            flexGrow: 1
        },
        avatar:{
            margin: theme.spacing(2)
        }
    }
})

export default function Layout({ children }) {
    const classes = useStyles();
    const history = useHistory()
    const location = useLocation()


    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlinedIcon color='secondary' />,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlineOutlinedIcon color='secondary' />,
            path: '/create'
        }
    ]
    
    return (
        <div className={classes.root}>
            {/* app bar */}
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar>
                    <Typography className={classes.date}>
                    Welcome to the Notes Taking Website, Today is { format(new Date(), 'do MMMM Y') } 
                    </Typography>
                    <Typography>
                        Monkey D. Luffy
                    </Typography>
                    <Avatar src="Luffy.jpg" className={classes.avatar}/>
                </Toolbar>
            </AppBar>

            {/* Side Drawer */}
            <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Your Notes
                    </Typography>
                </div>

            {/* List/Links */}
            <List>
                {menuItems.map(item => (
                    <ListItem
                    button
                    key={item.text}
                    onClick={() => history.push(item.path)}
                    className={location.pathname == item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>

            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

//avatar-color-of-notes