import {combineReducers} from 'redux';
import ratingFilterReducer from './RatingFilter';
import titleFilterReducer from './TitleFilter';
import movieListReducer from './MovieList';

export default combineReducers({ratingFilterReducer,
  titleFilterReducer,movieListReducer})