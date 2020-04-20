import { combineReducers } from 'redux';
import auth from './Auth';
import profile from './Profile';

export default combineReducers({ auth, profile });
