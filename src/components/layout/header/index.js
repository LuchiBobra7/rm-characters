import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Search from "./Search";
import Logo from "./Logo";
import MobileFilters from "./MobileFilters";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%"
  },
  appbar: {
    background:
      "linear-gradient(45deg, rgba(33, 150, 243, .96) 30%, rgba(33, 203, 243, .96) 90%)",
    boxShadow: "0 1px 7px rgba(0, 0, 0, .35)",
    zIndex: 100
  },
  container: {
    display: "flex",
    maxWidth: "860px",
    width: "100%",
    margin: "0 auto",
    alignItems: "center",
    flexWrap: "wrap"
  },
  header: {
    minHeight: "60px"
  },
  grow: {
    flexGrow: 1
  }
});

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar className={classes.header} color="default">
        <div className={`${classes.container}`}>
          <Logo />
          <div className={classes.grow} />
          <Search />
          <MobileFilters />
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Header);
