import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux" // this is a component from the react-redux dependency
                                     // Redux uses context under the hood which is why we wrap the Provider Component arund the App component
import store from "./redux"
import App from "./App"

ReactDOM.render(
    <Provider store={store}> {/* the Provider component passes a store prop and we get the store instance from the redux/index.js file that we exported*/}
        <App /> {/** we can use the store instance within the app */}
    </Provider>,
    document.getElementById("root"))
    
// the react-redux is separate dependency from the redux as the react-redux enables us to use and integrate the redux functionalities in an easier matter into the React Application
