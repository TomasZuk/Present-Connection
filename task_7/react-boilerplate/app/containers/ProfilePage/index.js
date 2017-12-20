/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import makeSelectProfilePage from './selectors';
import makeSelectRegisterPage from '../RegisterPage/selectors';
import makeSelectHomePage from '../HomePage/selectors';

import ProfileView from '../../components/ProfileView';

import { OnLoad } from './actions';


export class ProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(){
    this.props.OnLoad();
  }

  render() {
    return (
      <div>
        <ProfileView {...this.props} />
      </div>
    );
  }
}

ProfilePage.propTypes = {
};

const mapStateToProps = (state) => {
    makeSelectProfilePage(state) ||
    makeSelectRegisterPage(state) ||
    makeSelectHomePage(state)
};

function mapDispatchToProps(dispatch) {
  return {
    OnLoad: () => dispatch(OnLoad())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'profilePage', reducer });
const withSaga = injectSaga({ key: 'profilePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfilePage);
