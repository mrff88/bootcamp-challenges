import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import messageReducer from "../reducers/messageReducer";
import pokemonsReducer from "../reducers/pokemonsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = combineReducers({ messageReducer, pokemonsReducer });

const appStore = createStore(
  store,
  composeWithDevTools(applyMiddleware(thunk))
);

export default appStore;
