import { Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    balance:{
        fontSize: 23,
        marginBottom: 15
    }
})

function Balance() {
    const classes = useStyle();
    return (
        <Box>
            <Typography className={classes.balance}>Balance Rs 4000</Typography>
        </Box>
    )
}

export default Balance
