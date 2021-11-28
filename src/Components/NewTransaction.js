import { Box, TextField, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
    container:{
        display:'flex',
        flexDirection: 'column',
        '& > *':{
            marginTop: 30
        },
    },
    button:{
        background: "#445A6F",
        color: "#FFF"
    }
})

function NewTransaction() {
    const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Typography variant="h5">New Transaction</Typography>
      <TextField label="Enter Expense" />
      <TextField label="Total Amount" />
      <Button className={classes.button} variant="contained"> Add New Transaction </Button>
    </Box>
  );
}

export default NewTransaction;
