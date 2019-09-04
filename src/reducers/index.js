import {combineReducers} from 'redux';
import fetchKakkoStatsReducer from './fetchKakkoStatsReducer';
import fetchHughesStatsReducer from './fetchHughesStatsReducer';
import fetchHughesInfoReducer from './fetchHughesInfoReducer';
import fetchKakkoInfoReducer from './fetchKakkoInfoReducer';

export default combineReducers({
  fetchKakkoStatsReducer,
  fetchHughesStatsReducer,
  fetchKakkoInfoReducer,
  fetchHughesStatsReducer
})
