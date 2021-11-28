import { Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    balance:{
        fontSize: 23,
        marginBottom: 15
    }
})

function Balance({transactions}) {
    const classes = useStyle();

    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
    return (
        <Box>
            <Typography className={classes.balance}>Balance ₹{total}</Typography>
        </Box>
    )
}

export default Balance
