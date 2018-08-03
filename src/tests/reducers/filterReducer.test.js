import reducer from '../../reducers/filterReducer';
import { SET_FILTER } from '../../constants/action-types';

test('filterReducer should return the initial state', () => {

    expect(reducer(undefined, {})).toEqual('all');
});

test('should handle setFilter', () => {

    expect(reducer([], {
        type: SET_FILTER,
        filter: 'done'
    })).toEqual('done');
});
