import React, { useContext } from "react";
import { Store } from "./Store";
import { IIncrementAction, IDecrementAction } from "./interfaces";
import { incrementCounterAction, decrementCounterAction, resetCounterAction } from './actions';

import CounterOutput from "./components/CounterOutput";

const Main: React.FC = (): JSX.Element => {
    const [state, dispatch] = useContext(Store);
    const { counter } = state;
    const { button } = styles;

    return (
        <div className="container">
            <header className="section">
                <h1 className="title is-size-2 has-text-centered">React-TS Counter</h1>
            </header>
            <main className="section has-text-centered">
                <CounterOutput counter={counter} />
                <div className="field">
                    <button
                        onClick={() => incrementCounterAction(state, dispatch)}
                        style={button}
                        className="button is-medium is-outlined is-success"
                    >Increment</button>
                    <button
                        onClick={() => decrementCounterAction(state, dispatch)}
                        style={button}
                        className="button is-medium is-outlined is-danger"
                    >Decrement</button>
                    <button
                        onClick={() => resetCounterAction(state, dispatch)}
                        style={button}
                        className="button is-medium is-outlined"
                    >Reset</button>
                </div>
            </main>
        </div>
    );
}

const styles = {
    button: {
        margin: "5px 10px"
    }
}

export default Main;
