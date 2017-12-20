
import { fromJS } from 'immutable';
import registrerFormReducer from '../reducer';

describe('registrerFormReducer', () => {
  it('returns the initial state', () => {
    expect(registrerFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
