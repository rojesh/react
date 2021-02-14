const redux = require("redux")

function increment() {
    return {
        type: "INCREMENT"
    }
}

function decrement() {
    return {
        type: "DECREMENT"
    }
}

// Create another action creator to handle decrementing the number
function reducer(state = {count: 0}, action) {  // here we have an initial state for count
    // return new state based on the incoming action.type
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        // add another switch-case statement to this reducer to handle the decrement action
        // we usually don't need a break statement because it's going to return and go out
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default: // we need a default state since we are passing the reducer to the store
            return state
    }
}   
    // more on Reducers
    // it takes in the old version of state and an action
    // by using the action with the prev state to return new state

