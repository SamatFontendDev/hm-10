// Реализуйте редьюсер
// Файл с тестами RoverPhotos.test.js поможет вам в этом
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure } from './actions';

const isLoading = handleActions({
    [fetchPhotosRequest]: () => true,
    [fetchPhotosSuccess]: () => false,
    [fetchPhotosFailure]: () => false
}, false)

const data = handleActions({
    [fetchPhotosRequest]: () => false,
    [fetchPhotosSuccess]: (_state, action) => action.payload,
}, null)

const error = handleActions({
    [fetchPhotosFailure]: (_state, action) => action.payload
}, null)

export default combineReducers({
    isLoading,
    data,
    error
})