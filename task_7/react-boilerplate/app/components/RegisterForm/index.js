/**
*
* RegisterForm
*
*/

import React from 'react';
import { FlatButton, TextField, DatePicker } from 'material-ui';
// import styled from 'styled-components';

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};



function RegisterForm(props) {

  const collectInputData = () => {
    let form = document.getElementById("register-form");
    props.viewProfileAction(form.username.value, form.password.value, form.date.value, form.photo.file);
  };

  return (
    <div>
      <form id="register-form">
        <TextField
          floatingLabelText="Username"
          name="username"
        /><br />
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
        /><br />
        <DatePicker
          name="date"
          autoOk={false}
          floatingLabelText="Date of birth"
        /><br />
        <FlatButton
          label="Choose an Image"
          labelPosition="before"
          style={styles.uploadButton}
          containerElement="label"
        >
          <input name="photo" type="file" />
        </FlatButton>
        <br />
        <FlatButton
          label="Save"
          onClick={collectInputData}
          href='/user'
        />
      </form>
    </div>
  );
}

RegisterForm.propTypes = {

};

export default RegisterForm;
