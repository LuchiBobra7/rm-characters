import React, {  Fragment, useContext, useState, useEffect, useRef } from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Context from "../../../Context";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  search: {
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    position: "absolute",
    left: "0",
    right: "0",
    bottom: 0,
    top: 0,
    display: "none",
    alignItems: "center",
    zIndex: 10,
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",

    [theme.breakpoints.up("md")]: {
      background: fade(theme.palette.common.white, 0.15),
      marginLeft: theme.spacing.unit,
      display: "flex",
      width: "auto",
      position: "relative",
      "&:hover": {
        background: fade(theme.palette.common.white, 0.25)
      }
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  toggleSearchBtn: {
    color: "#fff",
    minWidth: "44px",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  closeSearchBtn: {
    position: "absolute",
    right: "16px",
    zIndex: "11",
    color: "#fff"
  }
});

const SearchForm = ({ classes }) => {
  
  const { filters, fetchFilteredData, setFilters } = useContext(Context);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const inputEl = useRef(null);

  // Toggle search form for sm devices
  const toggleSearchForm = async (e) => {
    await setVisibleSearch(!visibleSearch);
    
  };

  //Focus for open input, clear name filtering after search form closed
  useEffect(() => {
    !!visibleSearch && inputEl.current.focus();
    setFilters({...filters, name: ''});
    inputEl.current.value = ''
  }, [visibleSearch]);


  return (
    <Fragment>
      <form
        className={visibleSearch ? `${classes.search} d-flex` : classes.search}
        action="#"
      >
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          onChange={e => fetchFilteredData(e)}
          name="name"
          autoComplete="off"
          inputRef={inputEl}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </form>
      {visibleSearch && (
        <Button
          size="small"
          color="primary"
          onClick={() => toggleSearchForm()}
          className={classes.closeSearchBtn}
        >
          <CloseIcon />
        </Button>
      )}
      <Button
        size="small"
        color="primary"
        onClick={() => toggleSearchForm()}
        className={classes.toggleSearchBtn}
      >
        <SearchIcon />
      </Button>
    </Fragment>
  );
};

export default withStyles(styles)(SearchForm);