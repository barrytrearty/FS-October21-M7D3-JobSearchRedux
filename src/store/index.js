import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { favoriteReducer } from "../reducers/favoriteCompanies";
import { jobsReducer } from "../reducers/jobSearch";
import thunk from "redux-thunk";

const componseEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  companies: { favorites: [] },
  jobs: { jobsArray: [], isError: false },
};

const bigReducer = combineReducers({
  companies: favoriteReducer,
  jobs: jobsReducer,
});

const configureStore = createStore(
  bigReducer,
  initialState,
  componseEnhancers(applyMiddleware(thunk))
);

export default configureStore;
