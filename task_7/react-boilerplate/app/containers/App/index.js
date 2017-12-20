/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
// import UserPage from 'containers/UserPage';
import ProfilePage from 'containers/ProfilePage';
import AddRowPage from 'containers/AddRowPage/Loadable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Footer, Header, Meniu} from '../../components/Layouts';
import 'bootstrap/dist/css/bootstrap.css';


export default function App() {
  return (
    <MuiThemeProvider >
      <div className="container">
        <Header />
        <Meniu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={RegisterPage} />
            <Route path="/user" component={ProfilePage} />
            {/*<Route path="/user" component={UserPage} />*/}
            <Route path="/addrow" component={AddRowPage} />
            <Route component={NotFoundPage} />
          </Switch>
        <Footer />
    </div>
    </MuiThemeProvider>
  );
}
