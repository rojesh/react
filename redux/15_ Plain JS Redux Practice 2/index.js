import store from "./redux"
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount, upvoteVideo, downvoteVideo} from "./redux/youTubeVideo"
import {setUserDetails, removeUserDetials} from "./redux/user"

const setUserInput = {
    firstName: "Sam",
    lastName: "Wise",
    id: "1",
    email: "samwise@gmail.com"
}

store.dispatch(addFavoriteThing("something1"))
store.dispatch(addFavoriteThing("something2"))
store.dispatch(setUserDetails(setUserInput))
store.dispatch(setUserDetails({email: "samthewise@gmail.com"}))
store.dispatch(removeUserDetials())

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
