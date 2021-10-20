import { createStore } from "redux";
import { favoriteReducer } from "../reducers";

export const initialState = {
  companies: { favorites: [] },
};

const configureStore = createStore(
  favoriteReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
