import {
  Box,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  container: {
    display: "flex",
    "& > *": {
      padding: 8,
      flex: 1,
    },
  },
  income: {
    color: "green",
  },
  expense: {
    color: "red",
  },
});

function ExpenseCard({ transactions }) {
  const classes = useStyle();
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <Box className={classes.container}>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography className={classes.income}>₹{income}</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography className={classes.expense}>₹{expense}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ExpenseCard;
