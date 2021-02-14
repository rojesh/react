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

function setYouTubeTitle(title) {
    return {
        type: "SET_YOUTUBE_TITLE",
        payload: title
    }
}

const initialState = {
    count: 0,
    favoriteThings: [],
    youtubeVideo: {
        title: "",
        viewCount: 0,
        votes: {
            up: 0,
            down: 0
        }
    }
}
console.log(initialState)

/**
 * Challenge:
 * Implement an action creator and reducer case to handle upvoting our YouTube video (+1)
 */

function upVote() {
    return {
        type: "UP_VOTE"
    }
}

function downVote() {
    return {
        type: "DOWN_VOTE"
    }
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
        case "REMOVE_FAVORITE_THING": {
            const arrCopy = [...state.favoriteThings]
            
            const updatedArr = state.favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
            return {
                ...state,
                favoriteThings: updatedArr
            }
        }
        case "SET_YOUTUBE_TITLE":
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    title: action.payload
                }
            }
            
        case "UP_VOTE" :
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    votes: {
                        ...state.youtubeVideo.votes,
                        up: state.youtubeVideo.votes.up + 1
                    }
                }
            }
            
        case "DOWN_VOTE" :
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    votes: {
                        ...state.youtubeVideo.votes,
                        down: state.youtubeVideo.votes.down + 1
                    }
                }
            }
            
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(setYouTubeTitle("Learn Redux"))
store.dispatch(upVote())
store.dispatch(upVote())
store.dispatch(downVote())