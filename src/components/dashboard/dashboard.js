import React from "react";
import { Grid, makeStyles, Paper, TextField, Button, FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import HouseTile from "../houses/houseTile";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  grid: {
    flexDirection: 'row'
  }
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <HouseTile />
      </Grid>
      <Grid item xs={4}>
        <HouseTile />
      </Grid>
      <Grid item xs={4}>
        <HouseTile />
      </Grid>
    </React.Fragment>
  );
}

function Filters() {
  const classes = useStyles();
  const [price, setPrice] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = event => {
    setPrice(event.target.value);
  };

  return (
    <div>
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Price Range</InputLabel>
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={price}
            onChange={handleChange}
            inputProps={{
              name: "age",
              id: "demo-controlled-open-select"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>0-500</MenuItem>
            <MenuItem value={20}>501-1000</MenuItem>
            <MenuItem value={30}>1000+</MenuItem>
          </Select>
        </FormControl>
      </form>
    </div>
  );
}

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid}>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />
        <Button className={classes.button}>
            Search
        </Button>
        <Filters />
      </Grid>
      <Grid container spacing={1}>
        <Grid container item xs={8} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={8} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={8} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
