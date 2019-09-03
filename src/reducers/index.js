import {combineReducers} from 'redux';
import fetchKakkoStatsReducer from './fetchKakkoStatsReducer';
import fetchHughesStatsReducer from './fetchHughesStatsReducer';

export default combineReducers({
  fetchKakkoStatsReducer,
  fetchHughesStatsReducer
})
