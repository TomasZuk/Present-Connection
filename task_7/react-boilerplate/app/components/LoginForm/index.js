/**
*
* Forms
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, RaisedButton } from 'material-ui';


export default function Login(props){

  const getInput = () => {
    let input = document.getElementsByName('username')[0];
    props.OnLogin(input.value);
  };

  return(
      <div className="form">
        <TextField
          floatingLabelText="Login"
          name="username"
          onChange={getInput}
        /><br/>
        <TextField
          floatingLabelText="Password"
          type="password"
        /><br/>
        <Link to={"/user"}><RaisedButton className="loginBtn" label="Login"/></Link>
      </div>
  );

}

