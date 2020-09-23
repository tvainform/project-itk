import {applyMiddleware, combineReducers, createStore} from "redux";
import incidentReducer from "./incident-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    incidentPage: incidentReducer,
    usersPage: usersReducer,
    profilePage: profileReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;
