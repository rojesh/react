const redux = require("redux")

function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payload: thing
    }
}

const initialState = {
    count: 0,
    favoriteThings: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state, // we needed to do this for functional components because it doesn't get all of the state
                count: state.count + action.payload
            }
        case "ADD_FAVORITE_THING":
            return {
                ...state, // this concept is important in keeping everything intact when we have more than one key/value in state
                favoriteThings: [...state.favoriteThings, action.payload] // this works because we are using pur functions and not mutating the state
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addFavoriteThing("something1"))
store.dispatch(addFavoriteThing("something2"))
store.dispatch(changeCount())
store.dispatch(changeCount(3))
console.log("logging the initial state", initialState)

// {count: 0, favoriteThings: ["something1"]}
// {count: 0, favoriteThings: ["something1", "something2"]}
// {count: 1, favoriteThings: ["something1", "something2"]}
// {count: 4, favoriteThings: ["something1", "something2"]}
// logging the initial state,{count: 0, favoriteThings: []}
