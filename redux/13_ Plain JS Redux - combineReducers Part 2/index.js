import store from "./redux" // this will get the default export from "./redux/index.js", this convention is essentially the same thing
// this post talks more about index.js https://www.reddit.com/r/javascript/comments/7rv221/to_indexjs_or_not_to_indexjs/
// we then can import the named imports from the action creators that we made from the redux folders
console.log(store) 
/**
 * {dispatch: dispatch(action), subscribe: subscribe(listener), getState: getState(), replaceReducer: replaceReducer(nextReducer)}
 this is what we get in the console
 */

// we then can dispatch using the action/creators that we imported
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount, upvoteVideo, downvoteVideo} from "./redux/youTubeVideo" 

store.dispatch(changeCount(42)) // {count: 42, favoriteThings: [], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}
store.dispatch(addFavoriteThing("Fav1")) //{count: 42, favoriteThings: ["Fav1"], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

store.dispatch(addFavoriteThing("Fav2")) // {count: 42, favoriteThings: ["Fav1", "Fav2"], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

store.dispatch(removeFavoriteThing("Fav1")) // {count: 42, favoriteThings: ["Fav2"], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

store.dispatch(setYouTubeTitle("Youtube Vid 1")) // {count: 42, favoriteThings: ["Fav2"], youTubeVideo: {title: "Youtube Vid 1", viewCount: 0, votes: {up: 0, down: 0}}}

store.dispatch(incrementViewCount()) // {count: 42, favoriteThings: ["Fav2"], youTubeVideo: {title: "Youtube Vid 1", viewCount: 1, votes: {up: 0, down: 0}}}

store.dispatch(upvoteVideo()) // {count: 42, favoriteThings: ["Fav2"], youTubeVideo: {title: "Youtube Vid 1", viewCount: 1, votes: {up: 1, down: 0}}}

store.dispatch(downvoteVideo()) // {count: 42, favoriteThings: ["Fav2"], youTubeVideo: {title: "Youtube Vid 1", viewCount: 1, votes: {up: 1, down: 1}}}

// when we pass/dispatch our action, we send it to the rootReducer's store all in the redux/index.js file
// what the store did was compare it to the other reducers in the file and determine the state per each reducer in the combineReducer
// we can update state in multiple cases in our app