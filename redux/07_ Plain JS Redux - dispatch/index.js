const redux = require("redux")

// we're going to improve our action creators
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

// we're going to make sure the reducer is stable
function reducer(state = {count: 0}, action) {
    // return new state based on the incoming action.type
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => { // this takes in a function and it usually sends in a message
    console.log(store.getState())
})

// this sends an action to the reducer and checks the actions
store.dispatch(increment())
store.dispatch({type:"WEIRD"})

// the code above is essentially the fundamentals of Redux without React 
// https://redux.js.org/api/store#subscribelistener

