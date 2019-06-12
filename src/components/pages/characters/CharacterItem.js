import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { DEFAULT_CHARACTER_IMG } from "../../../api";

const styles = theme => ({
  card: {
    maxWidth: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginBottom: "1.5rem",
    boxShadow: "0 3px 17px 0 rgba(0, 0, 0, .15) !important",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  cardMedia: {
    objectFit: "cover",
    maxWidth: "100%",
    transform: "scaleX(1)",
    "&:hover": {
      transform: "scaleX(-1)"
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "190px",
      maxHeight: "190px"
    }
  },
  cardContent: {
    padding: "16px !important",
    flexGrow: 1
  }
});

const CharacterItem = ({ classes, item }) => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.cardMedia}
      component="img"
      alt={item.name}
      image={item.image ? item.image : DEFAULT_CHARACTER_IMG}
      title={item.name}
    />
    <CardContent className={classes.cardContent}>
      <h2 className="title">{item.name}</h2>
      <dl className="grid-list">
        <dt>Status</dt>
        <dd>{item.status}</dd>
        <dt>Species</dt>
        <dd>{item.species}</dd>
        <dt>Gender</dt>
        <dd>{item.gender}</dd>
      </dl>
    </CardContent>
  </Card>
);

export default withStyles(styles)(CharacterItem);