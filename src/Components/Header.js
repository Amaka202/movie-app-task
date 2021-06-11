import React from 'react';
import { AppBar, Toolbar, Box } from "@material-ui/core";


function Header() {

    return (
        <div>
            <Box mb={10} >
                <AppBar>
                    <Toolbar>Welcome, search for your favorite movies below!</Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header;
