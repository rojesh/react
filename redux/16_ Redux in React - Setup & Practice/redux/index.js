import redux, {createStore} from "redux"

/**
 * Challenge: set up redux action creators, reducer, and store
 * We'll be building a counter app to start out.
 * Read the comments below for the step-by-step challenges
 */

// 1. Create action creators for having the count "increment" and "decrement"

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

// 2. Create a reducer to handle your increment and decrement actions
function reducer(count = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}

// 3. Create a new Redux store
const store = createStore(reducer)


// 4. Set up the subscribe function so we can more easily see the changes to the Redux state as they happen
store.subscribe(() => console.log(store.getState()))

// 5. Export the store as a default export
export default store


