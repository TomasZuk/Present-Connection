
import { fromJS } from 'immutable';
import addRowPageReducer from '../reducer';

describe('addRowPageReducer', () => {
  it('returns the initial state', () => {
    expect(addRowPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
