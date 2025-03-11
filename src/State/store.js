import {thunk} from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; // ✅ Import DevTools
import { authReducer } from "./Auth/Reducer";

const rootReducer = combineReducers({
    auth: authReducer
});

// ✅ Apply middleware with DevTools support
const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
