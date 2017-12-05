import React, {Component} from  'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';


class Login extends Component {

    render() {
         return(
            <MuiThemeProvider>
                <div className="login">
                    <TextField
                        floatingLabelText="Login"
                        onChange={this.loginUser}
                    /><br/>
                    <TextField
                        floatingLabelText="Password"
                        type="password"
                    /><br/>
                    <Link to={"/user"}><RaisedButton className="loginBtn" label="Login"/></Link>
                </div>
            </MuiThemeProvider>
         );
    }

    loginUser = (e) => {
        this.props.login(e.target.value);
    }
}



export default Login;