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
// the code above is basically the setup or philosophy of redux while the code below, finally utilizes the library
const store = redux.createStore(reducer)
console.log(store)
//dispatch: dispatch(action), subscribe: subscribe(listener), getState: getState(), replaceReducer: replaceReducer(nextReducer)}