import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Typography, makeStyles, Box } from "@material-ui/core";
import Balance from "./Components/Balance";
import ExpenseCard from "./Components/ExpenseCard";
import NewTransaction from "./Components/NewTransaction";
import Transaction from "./Components/Transaction";

const useStyle = makeStyles({
  header: {
    color: "blue",
    fontSize: 35,
    margin: "10px 0",
    textTransform: "uppercase",
  },
  component: {
    background: "#fff",
    width: "70%",
    padding: 10,
    borderRadius: "20px",
    display: "flex",
    "& > *": {
      width: "50%",
      padding: 10,
      height: "70vh",
    },
  },
});

function App() {
  const classes = useStyle();

  const [transactions, setTransactions] = useState([
    { id: 1, text: "Pizza", amount: -200 },
    { id: 2, text: "Biriyani", amount: -350 },
    { id: 3, text: "Salary", amount: 9500 },
    { id: 4, text: "Book", amount: -150 },
    { id: 5, text: "Trading", amount: 950 },
  ]);

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter( transaction => transaction.id !== id));
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions])
  }

  return (
    <div className="App">
      <Typography className={classes.header}>Expense Tracker</Typography>
      <Box className={classes.component}>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction addTransaction={addTransaction} />
        </Box>

        <Box>
          <Transaction transactions={transactions} deleteTransaction={deleteTransaction} />
        </Box>
      </Box>
    </div>
  );
}

export default App;
