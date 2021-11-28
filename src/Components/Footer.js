import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  footer: {
    color: "#111",
    position: 'fixed',
    bottom: 0,
  },
});

function Footer() {
  return (
    <Box>
      <Typography>Expense Tracker made by Saroj</Typography>
    </Box>
  );
}

export default Footer;
