/**
 *
 * RegisterForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import RegisterForm from '../../components/RegisterForm';
import {viewProfileAction} from './actions';

export class RegisterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMont() {
    const date = new Date;
  }

  render() {
    return (
      <div>
        <RegisterForm {...this.props} />
      </div>
    );
  }
}

RegisterPage.propTypes = {
};

const mapStateToProps = makeSelectRegisterPage();

function mapDispatchToProps(dispatch) {
  return {
    viewProfileAction: (username, password, date, photo) => {dispatch(viewProfileAction(username, password, date, photo))}
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'registerPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(RegisterPage);
