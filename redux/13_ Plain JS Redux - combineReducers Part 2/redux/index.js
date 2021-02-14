// combine the reducers into a single state tree

const redux = require("redux")
const {combineReducers, createStore} = redux // we deconstruct the combineReducers and createStore from Redux
import countReducer from "./count"
import favoriteThingsReducer from "./favoriteThings"
import youTubeVideoReducer from "./youTubeVideo"

// combine the reducers into a single state tree
const rootReducer = combineReducers({ // the rootReducer gets an object which represents the 
    count: countReducer,
    favoriteThings: favoriteThingsReducer,
    youTubeVideo: youTubeVideoReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store

// understanding default and named exports/imports https://medium.com/notjavascript/understand-the-difference-between-default-and-named-imports-and-exports-fc04b2736c1a

// index.js in the redux folder essentially is the redux entry for the whole app
/* import the separate reducers and do a default export from each file
    combine the reducers into a single state tree
    we create the store
    we export the store 
    */