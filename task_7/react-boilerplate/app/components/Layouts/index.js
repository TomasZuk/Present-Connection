/**
*
* Layouts
*
*/

import React from 'react';
import logo from './Images/logo.svg';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';

export function Footer() {
    return (
      <footer className="footer">
        <h5> &copy; 2017-12-02 Something in the footer and the copyrights.</h5>
      </footer>
    );
}

export function Header() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
}

export function MainContent() {
    return (
      <article>
        <h2>Welcome, {this.props.name}</h2>
      </article>
    );
}

const style = {
  display: 'inline-block',
  float: 'left',
  margin: '16px 32px 16px 0',
};

export function Meniu() {
  return (
    <Paper style={style}>
      <Menu>
        <Link to="/"><MenuItem primaryText="Homepage"/></Link>
        <Link to="/user"><MenuItem primaryText="User"/></Link>
        <Link to="/addrow"><MenuItem primaryText="Add a new row"/></Link>
        <Link to="/signup"><MenuItem primaryText="Register"/></Link>
      </Menu>
    </Paper>
  )
}

// function Layouts() {
//   return (
//     <div>
//     </div>
//   );
// }

// Layouts.propTypes = {
//
// };
