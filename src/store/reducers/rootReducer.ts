import { combineReducers } from 'redux';
import { messageReducer } from './messageReducer';
import { colorReducer } from './colorReducer';

export const rootReducer = combineReducers({
    messages: messageReducer,
    colors: colorReducer
});