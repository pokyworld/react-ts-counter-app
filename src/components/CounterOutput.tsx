import React, { useContext } from 'react'

interface IProps {
    counter: number
};

export const CounterOutput = (props: IProps): JSX.Element => {
    return (
        <div>
            <p className="is-size-1">{props.counter}</p>
        </div>
    )
};

export default CounterOutput;
