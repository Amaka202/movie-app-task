import React from 'react';
import { AppBar, Toolbar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    appbar: {
        alignItems: 'center',
      }
  });

function Header() {
      const classes = useStyles();

    
    return (
        <div>
            <Box mb={10} >
                <AppBar style={{ background: '#2E3B55' }} className={classes.appbar}>
                    <Toolbar>Welcome, search for your favorite movies below!</Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header;
