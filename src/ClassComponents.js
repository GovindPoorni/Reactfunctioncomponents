import React from "react";
import { render } from "react-dom";
const { Component } = require("react");


class CounterClass extends Component {
    constructor (props) {
        super (props)
        this.state = {count: 0};
    }

    increment = () => {
        this.setState ({count: this.state.count + 1});
    }

    render() {
        return(
            <div>
                <p>Count {this.state.count}</p>
                <button onClick={this.increment}>Click</button>
            </div>
        );
    }
}

export default CounterClass;

