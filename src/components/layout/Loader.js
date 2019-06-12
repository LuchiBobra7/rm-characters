import React from "react";
import { Preloader, Placeholder } from "react-preloading-screen";
import { withStyles } from "@material-ui/core/styles";
import { LOADER_IMG } from '../../api';

const styles = theme => ({
  title: {
    textAlign: "center"
  }
});

const Loader = ({ children, classes }) => (
  <Preloader fadeDuration={1500}>
    {children}
    <Placeholder>
      <span>
        <img
          alt="preloader"
          src={LOADER_IMG}
          height="260"
        />
        <h2 className="title text-center">Loading...</h2>
      </span>
    </Placeholder>
  </Preloader>
);

export default withStyles(styles)(Loader);
