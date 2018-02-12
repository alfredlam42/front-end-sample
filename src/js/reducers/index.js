import { combineReducers } from 'redux';

import signupForm from './signupFormReducers';
import tab from './tabReducers';

export default combineReducers({
  signupForm,
  tab
})