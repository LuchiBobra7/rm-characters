import React, { Fragment, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import FilterListIcon from "@material-ui/icons/FilterList";
import CharactersFilters from "../../pages/characters/CharactersFilters";
import ResetFiltersBtn from "../../ui/buttons/ResetFiltersBtn";

const styles = theme => ({
  filtersBtn: {
    color: "#fff",
    margin: "0 5px",
    minWidth: "44px",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  filtersList: {
    padding: "32px",
    minWidth: "160px",
    maxHeight: "100vh",
    overflowY: "auto"
  }
});

const Header = ({ classes }) => {
  const [drawer, openDrawer] = useState(false);
  
  const toggleDrawer = e => {
    openDrawer(!drawer);
  };

  return (
    <Fragment>
      <Button
        size="small"
        color="primary"
        onClick={() => toggleDrawer()}
        className={classes.filtersBtn}
      >
        <FilterListIcon />
      </Button>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => toggleDrawer()}
        className={classes.filtersDrawer}
      >
        <section className={classes.filtersList}>
          <CharactersFilters />
          <div>
            <ResetFiltersBtn />
          </div>
        </section>
      </Drawer>
    </Fragment>
  );
};

export default withStyles(styles)(Header);
