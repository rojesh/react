const redux = require("redux")

const action = {
    type: "INCREMENT"
}

function increment() { // this is considered an action creator
    return {
        type: "INCREMENT"
    }
}

console.log(increment())

// this will return the type: action
// in this case {type: "INCREMENT"}