import React, { Component } from 'react';
import Header from './Componenets/Layouts/Header';
import Meniu from './Componenets/Layouts/Menu';
import MainContent from './Componenets/Layouts/MainContent';
import Footer from './Componenets/Layouts/Footer';
import Login from './Componenets/Forms/Login';
import DataTable from './Componenets/Tables/Table';
import AddRow from './Componenets/Forms/AddRow';
import data from './data/data.js';
import 'react-table/react-table.css'


import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {

    constructor (props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
    }

    state = {
        username: ""
    };

    render() {

        return (
            <Router>
                <div>
                  <Header/>
                  <Meniu/>
                  <div className="content">
                      <Route exact path='/' render={(props) => (
                          <Login {...props} login={this.onLogin} />
                      )}/>
                      <Route path='/user' render={(props) => (
                          <MainContent {...props} name={this.state.username} />
                      )}/>
                      <Route path='/addrow' render={(props) => (
                          <AddRow {...props} data={data} />
                      )}/>
                  </div>
                  <DataTable data={data}
                     SubComponent={(row) => {
                         return (
                             <div>
                                 <Footer/>
                             </div>
                         )
                     }}
                  />
                  <Footer/>
                </div>
            </Router>
        );
  }

  onLogin = (name) => {
        this.setState({ username: name });
  };

}

export default App;
