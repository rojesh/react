import React from "react"
import {useSelector} from "react-redux" // useSelector basically replaces the first part of connect
import {increment, decrement} from "./redux"

function App(props) {
    const count = useSelector(state => state.count) // for more complex examples, we can look at the whole state.count if there's more properties
    // we can just grab pieces of the state if it's an object and assign it to a variable
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
        </div>
    )
}

// export default connect(state => ({count: state}), {increment, decrement})(App)
export default App