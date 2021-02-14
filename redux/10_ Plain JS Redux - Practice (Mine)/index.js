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

function removeFavoriteThing(thing) {
    return {
        type: "REMOVE_FAVORITE_THING",
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
                ...state,
                count: state.count + action.payload
            }
        case "ADD_FAVORITE_THING":
            return {
                ...state,
                favoriteThings: [...state.favoriteThings, action.payload]
            }
        case "REMOVE_FAVORITE_THING":
            // you can create a copy of a string as a variable
            // we don't want to use slice because it will mutate the array
            if (state.favoriteThings.includes(action.payload)) { // this if statement checks if the payload item is in the array
                // console.log("matched") this is to check if there's a match
                let newFavoriteThings = state.favoriteThings.filter(things => { // this returns a new array where the matched items are not there
                    return things != action.payload // it iterates through the array and checks returns if they match and the item in the array stays if it's true
                })
                
                return {
                    ...state,
                    favoriteThings: newFavoriteThings 
                }
            }
            console.log("not matched") // this is the item is not in the array and thus going to the default case

        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addFavoriteThing("Raindrops on roses"))
store.dispatch(addFavoriteThing("Whiskers on kittens"))

/**
 * Challenge: implement an action creator called `removeFavoriteThing` which takes the string
 * of the favorite thing you want to remove from the array and removes it
 */
store.dispatch(removeFavoriteThing("Raindrops on roses"))
store.dispatch(removeFavoriteThing("Whiskers on kittdens"))
