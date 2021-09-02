import { combineReducers } from "redux";
import usersReducer from '../reducers/usersReducer'


export const allReducer = combineReducers({
    users : usersReducer
})

