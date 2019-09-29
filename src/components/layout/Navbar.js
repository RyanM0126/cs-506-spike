import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
}))

function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            UW - Live Well!
          </Typography>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Navbar