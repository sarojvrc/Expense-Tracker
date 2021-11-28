import { Box, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle = makeStyles({
    list:{
        marginTop: 10,
        border: '1px solid #f6f6f6'
    }
})

function Transactions({transaction, deleteTransaction}) {
    const classes = useStyle();
    const sign = transaction.amount >= 0 ? '₹' : '-'; 
    const color = transaction.amount >= 0 ? "Green" : "Red";
    const amount = sign + Math.abs(transaction.amount);
    
    return (
        <ListItem className={classes.list} style={{background:`${color}`, color:"White"}}>
           <ListItemIcon>
               <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
           </ListItemIcon>
            <ListItemText primary={transaction.text} />
            <ListItemText primary={amount} />
        </ListItem>
    )
}

export default Transactions
