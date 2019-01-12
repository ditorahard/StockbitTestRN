import {combineReducers} from 'redux';
import {home} from '../home/home.reducer';
import {detailMovie} from '../detail/detail.reducer';

export default combineReducers({
  home, detailMovie
});