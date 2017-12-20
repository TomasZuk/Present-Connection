/**
 *
 * DataTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDataTable from './selectors';
import reducer from './reducer';
import saga from './saga';

import {getData} from './actions';
import Table from '../../components/Table'

export class DataTable extends React.Component { // eslint-disable-line react/prefer-stateless-function


  componentWillMount(){
    this.props.getData();
  }
  render() {
    if(this.props.data)
    {
      return <Table data={this.props.data}/>
    }
    else {
      return <div>No data</div>
    }
  }

}

DataTable.propTypes = {};

const mapStateToProps = makeSelectDataTable();

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(getData())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dataTable', reducer });
const withSaga = injectSaga({ key: 'dataTable', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DataTable);
