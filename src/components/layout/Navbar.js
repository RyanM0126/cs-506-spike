import React from "react";
import Link from "@material-ui/core/Link";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1)
  }
}));

function Navbar() {
  const classes = useStyles();
  // const loggedIn = true
  // const links = loggedIn ? (<SignedInLinks/>) : (<SignedOutLinks/>)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            UW - Live Well!
          </Typography>
          <SignedOutLinks/>
          <SignedInLinks/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
