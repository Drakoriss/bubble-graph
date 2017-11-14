import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

/**
 * Market changes imitator.
 */
class DataProvider {

    constructor() {
        this.currentValue = 100;
        this.changingRange = 1.5;
        this.changingFrequency = 400;
        this.intervalId = null;
        this.startProducing();
    }

    randomBetween(a, b) {
        return Math.random() * (b - a) + a;
    }

    produceValue() {
        const sign = Math.round(Math.random()) ? 1 : -1;
        const newValue = this.currentValue +
            this.randomBetween(0, this.changingRange) * sign;

        this.currentValue = +newValue.toFixed(3);

        return this.currentValue;
    }

    startProducing() {

        if (!this.intervalId) {
            this.intervalId = setInterval(
                () => {
                    console.log(this.produceValue());
                },
                this.changingFrequency
            );
        }
    }

    stopProducing() {

        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}

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
        const width = this.state.width;
        const height = this.state.height;

        svg.append("line")
            .attr("x1", 0)
            .attr("y1", height >> 1)
            .attr("x2", width)
            .attr("y2", height >> 1)
            .attr("stroke", "#504f50")
            .attr("stroke-width", 3);

        svg.append("line")
            .attr("x1", width >> 1)
            .attr("y1", 0)
            .attr("x2", width >> 1)
            .attr("y2", height)
            .attr("stroke", "#504f50")
            .attr("stroke-width", 3);
    }
}

ReactDOM.render(
    <Graph />,
    document.getElementById("root")
);
