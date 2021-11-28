import { Box, TextField, Typography, makeStyles, Button } from "@material-ui/core";
import React, {useState} from "react";

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

function NewTransaction({addTransaction}) {
    const classes = useStyle();
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const newTransaction = () => {
        const transaction = {
            id: Math.floor(Math.random() * 10000),
            text:text,
            amount: +amount
        }
        addTransaction(transaction);
    }

  return (
    <Box className={classes.container}>
      <Typography variant="h5">New Transaction</Typography>
      <TextField label="Enter Expense" onChange={(e) => setText(e.target.value)} />
      <TextField label="Total Amount" onChange={(e) => setAmount(e.target.value)} />
      <Button className={classes.button} variant="contained" onClick={newTransaction}> Add New Transaction </Button>
    </Box>
  );
}

export default NewTransaction;
