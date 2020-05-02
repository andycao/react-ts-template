import React, { Component } from "react";
import B from "./B.js";

class A extends Component {
    componentDidMount() {
        console.log("a");
    }
    render() {
        return (
            <h1>
                Hello, {this.props.name}
                <B></B>
            </h1>
        );
    }
}

export default A;
