import { createSelector } from 'reselect';

/**
 * Direct selector to the dataTable state domain
 */
const selectDataTableDomain = (state) => state.get('dataTable');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DataTable
 */

const makeSelectDataTable = () => createSelector(
  selectDataTableDomain,
  (substate) => substate.toJS()
);

export default makeSelectDataTable;
export {
  selectDataTableDomain,
};
