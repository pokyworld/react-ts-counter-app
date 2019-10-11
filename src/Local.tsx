import React, { Component } from "react";

import CounterOutput from "./components/CounterOutput";

// interface iAppProps {}   // can't have empty interface
interface IAppState {
    counter: number;
};

export class Local extends Component<{}, IAppState> {
    public state: IAppState = { counter: 0 };

    private handleIncrement = (value: number) => {
        this.setState({ counter: this.state.counter += value });
    };

    handleDecrement = (value: number) => {
        this.setState({ counter: this.state.counter -= value });
    };

    handleReset = () => {
        this.setState({ counter: 0 });
    };

    render() {
        const { button } = styles;
        return (
            <div className="has-text-centered">
                <CounterOutput counter={this.state.counter} />
                <button
                    className="button is-medium is-outlined is-success"
                    style={button}
                    onClick={() => this.handleIncrement(1)}
                >Increment</button>
                <button
                    className="button is-medium is-outlined is-danger"
                    style={button}
                    onClick={() => this.handleDecrement(1)}
                >Decrement</button>
                <button
                    className="button is-medium is-outlined"
                    style={button}
                    onClick={() => this.handleReset()}
                >Reset</button>
            </div>
        );
    }

};

const styles = {
    button: {
        margin: "5px 10px"
    }
};

export default Local;