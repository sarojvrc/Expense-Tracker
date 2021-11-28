import { Box, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle = makeStyles({
    list:{
        marginTop: 10,
        border: '1px solid #f6f6f6'
    }
})

function Transactions({transaction}) {
    const classes = useStyle();
    return (
        <ListItem className={classes.list}>
           <ListItemIcon>
               <DeleteIcon />
           </ListItemIcon>
            <ListItemText primary={transaction.text} />
            <ListItemText primary={transaction.amount} />
        </ListItem>
    )
}

export default Transactions
