import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2), // 8 x 2
    width: 275,
    marginRight: theme.spacing(2),
  },
  button: {
    width: "100%",
  },
}));

const tags = [
  { id: 1, name: "Reactjs" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "Dotnet" },
  { id: 4, name: "Php" },
  { id: 5, name: "MaterialDesign" },
  { id: 6, name: "WebDev" },
];

export default function NavBar() {
  const classes = useStyle();

  return (
    <Paper className={classes.root}>
      <Button variante="outlined" color="secondary" className={classes.button}>
        Registrar
      </Button>
      <ListSubheader>{`Tags em alta`}</ListSubheader>
      {tags.map((item) => (
        <ListItem dense button key={`item-${item.id}-${item.name}`}>
          <ListItemText primary={`#${item.name}`} />
        </ListItem>
      ))}
      <ListItem button>Exibir mais Tags</ListItem>
    </Paper>
  );
}
