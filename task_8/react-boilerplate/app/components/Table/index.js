/**
*
* Table
*
*/

import React from 'react';
// import styled from 'styled-components';
import ReactTable from 'react-table';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function getHeaders(data) {
  let headers = [];
  data.map(arr => {
    for (let key in arr)
      if (arr.hasOwnProperty(key)) {
        if (headers.indexOf(key) === -1) {
          headers.push(key);
        }
      }
    return [];
  });
  return headers;
}
function getColumns(data) {
  let headers = getHeaders(data);
  let columns = [];
  headers.map(item => {
    const coordinates = "coordinates";
    if (item === coordinates) {
      return columns.push({
        Header: item,
        accessor: item,
      });
    }
    return columns.push({ Header: item, accessor: item });
  });
  return columns;
}


function Table(props) {
      return (
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <ReactTable
              data={props.data}
              columns={getColumns(props.data)}
              showPageSizeOptions={true}
              resizable={false}
              filterable
            />
          </div>
        </div>
      );
}

Table.propTypes = {

};

export default Table;
