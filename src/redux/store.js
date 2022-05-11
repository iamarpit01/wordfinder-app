import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import colorsReducer from './colors.reducer'

const store = createStore(
    combineReducers({
        colors: colorsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store