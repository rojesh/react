function setUserDetails(userDetails) {
    return {
        type: "SET_USER_DETAILS",
        payload: userDetails
    }
}

function removeUserDetials() {
    return {
        type: "REMOVE_USER_DETAILS"
    }
}

// const initialState = {
//     firstName: "",
//     lastName: "",
//     id: "",
//     email: ""
// }

function userReducer(user = null, action) {
    switch(action.type) {
        case("SET_USER_DETAILS"):
            return {
                ...user, // we want this here just in case we just want to change one key-value pair or element
                ...action.payload   
            }
        case("REMOVE_USER_DETAILS"): 
            return null // we do null because an empty object {} will still give us a truthy value
                        // like using this example if (globalState.user)
        default:
            return user
    }
}

export default userReducer

export {
    setUserDetails,
    removeUserDetials
}

/**
 * Challenge:
 * 
 * Create a new state property to hold the currently-logged-in user info. I.e. if our app wanted to allow a user to log in, we would likely want to keep track of some info from the logged in user. For this challenge, you'll save a user with these properties:
 * {
 *      firstName: ___,
 *      lastName: ___,
 *      id: ___,
 *      email: ___
 * }
 * 
 * This will require 
 *      (1) Creating a new file to hold our new Redux stuff re: the user (e.g. user.js),
 *      (2) Creating a new action creator (e.g. "setUserDetails"),
 *      (3) Creating a new reducer, and 
 *      (4) Adding that reducer to our rootReducer with combineReducers
 */
