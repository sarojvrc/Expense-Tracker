import logo from './logo.svg';
import './App.css';
import {Typography, makeStyles, Box} from '@material-ui/core';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransaction from './Components/NewTransaction';

const useStyle = makeStyles({
  header:{
    color: 'blue',
    fontSize: 35,
    margin: '10px 0',
    textTransform: 'uppercase'
  },
  component:{
    background: '#fff',
    width: '70%',
    padding: 10,
    borderRadius: '20px'
  }
})

function App() {

  const classes = useStyle();

  return (
    <div className="App">
      <Typography className={classes.header}>
        Expense Tracker
      </Typography>
      <Box className={classes.component}>
        <Balance />
        <ExpenseCard />
        <NewTransaction />
      </Box>
    </div>
  );
}

export default App;
