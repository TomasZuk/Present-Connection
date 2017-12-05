import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Link} from 'react-router-dom';



const style = {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
};

const Meniu = () => (
    <MuiThemeProvider>
        <Paper style={style}>
            <Menu>
                <Link to="/"><MenuItem primaryText="Homepage" /></Link>
                <Link to="/user" ><MenuItem primaryText="User" /></Link>
                <Link to="/addrow" ><MenuItem primaryText="Add a new row" /></Link>
            </Menu>
        </Paper>
    </MuiThemeProvider>
);


export default Meniu;