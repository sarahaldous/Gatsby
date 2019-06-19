import React, { Component } from 'react'
import Layout from "../components/layout"

class App extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
    decrement = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }

    render(){
        return (
            <Layout>
                <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                </div>
            </Layout>
        )
    }
}

export default App