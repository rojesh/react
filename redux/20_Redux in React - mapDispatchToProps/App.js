import React from "react"
import {connect} from "react-redux"
import {increment, decrement} from "./redux" // we have to export our action creators from the second parameter of the connect

function App(props) {    
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
        </div>
    )
}

// https://react-redux.js.org/api/connect#connect
// there are more complexitis and you can read the link above
// we are going to refactor this using hooks

export default connect(state => ({count: state}), {increment, decrement})(App)


// the code above is essentially the same below

// // Write the mapStateToProps function from scratch
// // Takes the global state from Redux as a parameter
// // returns an object where the keys are the name of the prop your component wants,
// // and the values are the actual parts of the global state your component wants
// function mapStateToProps(state) {
//     return {
//         count: state
//     }
// }

// const mapDispatchToProps = {
//     oranges: increment, // this will send the props to the jsx above and will get the result from the reducer
//     apples: decrement
// }


// export default connect(mapStateToProps, mapDispatchToProps)(App)

