const redux = require("redux")

// we did this to make it dynamic instead of having separate dec and inc action creators
function changeCount(amount = 1) { // we can add a default parameter
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}
// payloads are like an attachment to the object
// payload is the usual convention since we can use any other name


function reducer(state = {count: 0}, action) {
    // return new state based on the incoming action.type
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                count: state.count + action.payload
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => { // this runs every time there's a dispatch
    console.log(store.getState())
})

store.dispatch(changeCount(5))
store.dispatch(changeCount(-15))
store.dispatch(changeCount()) // this can still run