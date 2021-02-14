/**
 * Challenge:
 * 
 * Do it again, from scratch!
 * 
 * 1. Action creators for increment, decrement, double, and halve
 * 2. Reducer to handle these actions 👆🏻
 */
const redux = require("redux")

function increment() {
    return {
        type: "INCREMENT" // the type is in Upper_Snake_Case
    }
}

function decrement() {
    return {
        type:"DECREMENT"
    }
}

function double() {
    return {
        type: "DOUBLE"
    }    
}

function halve() {
    return {
        type: "HALVE"
    }
}

// the reducer takes in the currenet/previous state and also a function action
function reducer(prevState = {count: 0}, action) { 
    switch(action.type) {
        case("INCREMENT"):
            return { // we return an object, this case our object key is count which is from our state
                count: prevState.count + 1
            }
        // no need to break since the case would return and get out of the function block
        case("DECREMENT"): 
            return {
                count: prevState.count - 1
            }
        
        case("DOUBLE"):
             return {
                 count: prevState.count * 2
             }
             
        case("HALVE"):
            return {
                count: Math.round(prevState.count / 2)
            }
        
        default:
            return state
    } 
}

// we can write state as a value as well and not always an object
// function reducer(state = 0, action) {
//     switch(action.type) {
//         case "INCREMENT":
//             return state + 1
//         case "DECREMENT":
//             return state - 1
//         case "DOUBLE":
//             return state * 2
//         case "HALVE":
//             return Math.round(state / 2)
//         default:
//             return state
//     }
// }