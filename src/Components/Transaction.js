import { Box, Divider, Typography, makeStyles, List } from "@material-ui/core";
import React from "react";
import Transactions from "./Transactions";

const useStyle = makeStyles({
  component: {
      '& > *':{
          marginBottom: 10
      }
  },
});

function Transaction({transactions, deleteTransaction}) {
  const classes = useStyle();

  return (
    <Box className={classes.component}>
      <Typography variant="h5">Transaction History</Typography>
      <Divider />
      <List>
          {
              transactions.map(transaction => {
                  return <Transactions key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
              })
          }
      </List>
    </Box>
  );
}

export default Transaction;
