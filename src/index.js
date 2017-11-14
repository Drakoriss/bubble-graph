import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

class Graph extends React.Component {

    constructor(props) {
        super();

        const width = props.width || 400;
        const height = props.height || 400;

        this.state = {
            width: width,
            height: height
        };
    }

    render() {
        const width = this.state.width;
        const height = this.state.height;

        return <svg id="graph" width={width} height={height}></svg>;
    }

    componentDidMount() {
        const svg = d3.select("#graph");

        // d3 chart initialization here
    }
}

ReactDOM.render(
    <Graph width={400} height={350} />,
    document.getElementById("root")
);
