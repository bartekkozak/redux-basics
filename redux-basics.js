const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Reducer

const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + 13
    };
  }
  return state;
};

// Store

const store = createStore(rootReducer);

console.log(store.getState());

// Subscribtion

store.subscribe(() => {
  console.log("[subscription]", store.getState());
});

// Dispatching Action

store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 13 });

console.log(store.getState());
