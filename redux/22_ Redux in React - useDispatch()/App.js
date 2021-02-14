import React from "react"
import {useSelector, useDispatch} from "react-redux" // these are the hooks and useDispatch is essentially the second part of connect of getting what action creators to dispatch
import {increment, decrement} from "./redux"

function App(props) {
    const count = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{count}</h1>
            {/* the onClick takes an anonymous function otherwise it jsut returns an event, where the dispatch would just be the function that we imported from redux*/}
            <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
            <button onClick={() => {increment()}}>+</button>
        </div>
    )
}

// export default connect(state => ({count: state}), {increment, decrement})(App)
// we do the hooks so we don't have to worry about the connect Higher Order Functions

export default App

// https://thoughtbot.com/blog/using-redux-with-react-hooks
// this talks about a case of using connect for the sake of testing

// https://react-redux.js.org/api/hooks#usage-warnings
// this warns you about stale props and zombie children