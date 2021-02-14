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

function favoriteThingsReducer(favoriteThings = [], action) { // we get an empty array initially
    switch(action.type) {
        case "ADD_FAVORITE_THING":
            return [...favoriteThings, action.payload]
            
        case "REMOVE_FAVORITE_THING": {
            const arrCopy = [...favoriteThings] // this is here just to show that we can copy an array
            
            const updatedArr = arrCopy.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
            
            return  updatedArr
        }
        default:
            return favoriteThings
    }
}

