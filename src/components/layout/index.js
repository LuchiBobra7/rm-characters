import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./header";
import Loader from "./Loader";

const styles = theme => ({
  mainContent: {
    padding: "25px 0"
  }
});

const Layout = ({ classes, children }) => {
  return (
    <Loader>
      <Header />
      <main className={classes.mainContent}>{children}</main>
    </Loader>
  );
};

export default withStyles(styles)(Layout);
