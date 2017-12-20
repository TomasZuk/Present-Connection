import { createSelector } from 'reselect';

/**
 * Direct selector to the addRowPage state domain
 */
const selectAddRowPageDomain = (state) => state.get('addRowPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddRowPage
 */

const makeSelectAddRowPage = () => createSelector(
  selectAddRowPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectAddRowPage;
export {
  selectAddRowPageDomain,
};
