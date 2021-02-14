const redux = require("redux")
// it's good practice to have a redux folder that has different files that handle different areas within the state
// thus we have different action creators and reducers for each one
// we'll combine all the reducers into one with combineReducers to make our code more elegant and clean

// we are not dealing with state in the main file here
console.log(initialState)

const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

