import React, { Fragment, useContext } from "react";
import CharacterItem from "./CharacterItem";
import { withStyles } from "@material-ui/core/styles";
import Context from "../../../Context";

const styles = theme => ({
  root: {
    display: "flex"
  },
  group: {
    marginBottom: `${theme.spacing.unit * 2}px`
  },
  aside: {
    position: "sticky",
    top: 76,
    zIndex: 100,
    alignSelf: "flex-start",
    paddingTop: "0"
  },
  sectionTitle: {
    padding: ".5rem 0",
    lineHeight: 1,
    fontWeight: 400,
    fontSize: 22,
    color: "#000",
    overflow: "hidden",
    "&:focus": {
      color: "#000"
    }
  }
});

const CharactersList = props => {
  const { list } = useContext(Context);
  return (
    <Fragment>
      {list && list.map(item => <CharacterItem key={item.id} item={item} />)}
    </Fragment>
  );
};

export default withStyles(styles)(CharactersList);