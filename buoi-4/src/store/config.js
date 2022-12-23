import { combineReducers, createStore } from "redux";
import { bookingMovieTicketReducer } from "./reducers/bookingTicketReducer";

const rootReducer = combineReducers({
  bookingMovieTicketReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
