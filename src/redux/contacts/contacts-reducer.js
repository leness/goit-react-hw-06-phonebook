import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from './contacts-actions'


const contacts = createReducer([], {
    [actions.addContacts]: (state, {payload}) => [...state, payload], 
    [actions.deleteContact]: (state, {payload}) =>
        state.filter(({ id }) => id !== payload),
})


const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload})=>payload,
})


export default combineReducers({
    contacts,
    filter,
})
