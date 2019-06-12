import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  title: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    fontFamily: "East Sea Dokdo, cursive",
    fontSize: "32px",
    marginRight: "7px",
    [theme.breakpoints.up("md")]: {
      fontSize: "38px"
    }
  },
  logoSubtitle: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inline"
    }
  }
});

const Logo = ({ classes }) => {
  return (
    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
      <Link to="/" className={classes.logo}>
        Rick&Morty
      </Link>
      <small className={classes.logoSubtitle}>characters</small>
    </Typography>
  );
};

export default withStyles(styles)(Logo);
