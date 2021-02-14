import React from "react"
import {connect} from "react-redux"

function App(props) {    
    return (
        <div>
            <h1>{props.count}</h1>
            <button>-</button>
            <button>+</button>
        </div>
    )
}

// Write the mapStateToProps function from scratch
// Takes the global state from Redux as a parameter
// returns an object where the keys are the name of the prop your component wants,
// and the values are the actual parts of the global state your component wants
function mapStateToProps(globalState) {
    return {
        count: globalState
    }
}

export default connect(mapStateToProps, {})(App)
// export default connect(/* What parts of state do you want? */, /* What actions to dispatch? */)(App)

// the mapStateToProps function recieves the global state from redux
// return an object where the keys are the name of the prop your component wants,
// values are the actual parts of the global state your component wants


