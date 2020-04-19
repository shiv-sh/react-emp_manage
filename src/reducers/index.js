import { CombineReducers, combineReducers } from 'redux';

import empReducer from './empReducer';

export default combineReducers({
    applicationState:empReducer
})