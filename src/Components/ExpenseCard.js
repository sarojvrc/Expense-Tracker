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
      padding: 10,
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

function ExpenseCard() {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography className={classes.income}>Rs 1000</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography className={classes.expense}>Rs 1000</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ExpenseCard;
