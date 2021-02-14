import React from "react"
import {connect} from "react-redux"

function App(props) {    
    return (
        <div>
            <h1>COUNT GOES HERE</h1>
            <button>-</button>
            <button>+</button>
        </div>
    )
}

export default connect(/* What parts of state do you want? */, /* What actions to dispatch? */)(App)
// in this case we call the connect which callsand then returns a function, where we pass our component

// Connect is the glue that combines the redux and react 
// Connect somewhat of a HOC
// A HOC takes a component as it’s argument and returns a “beefed” up component, meaning a new component with extra capabilities from the original component
// Connect is different as it takes two parameters, which are 
// 1. What parts of global state does this component want access to
// 2. What actions do you want to be able to dispatch from this component
// Connection returns a function where we pass immediately where we want to pass the component to redux

// more on connect here https://react-redux.js.org/api/connect