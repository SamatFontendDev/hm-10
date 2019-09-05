// Реализуйте редьюсер
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addKey } from './actions';

const apiKey = handleActions({
    [addKey]: (_state, action) => action.payload
}, '')

export const getKey = state => state.auth.apiKey
export const getIsAuthorized = state => state.auth.apiKey ? true : false

export default combineReducers({
    apiKey
})
