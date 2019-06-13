import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchForm from "./SearchForm";
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
  header: {
    minHeight: "60px"
  },
  container: {
    width: "100%",
    alignItems: "center",
    flexWrap: "wrap"
  },
  grow: {
    flexGrow: 1
  }
});

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar className={classes.header} color="default">
        <div className={`container d-flex ${classes.container}`}>
          <Logo />
          <div className={classes.grow} />
            <SearchForm />
            <MobileFilters />
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Header);
