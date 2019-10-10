import React, { createContext, useReducer } from "react";
import { IState, IAction } from "./interfaces";

const initialState = {
    counter: 0
};

export const Store: any = createContext<IState>(initialState);

const reducer = (state: IState, action: IAction): IState => {
    const { type, payload } = action;
    console.log(state, action);
    switch (type) {
        case "INCREMENT": return { ...state, counter: state.counter += payload };
        case "DECREMENT": return { ...state, counter: state.counter -= payload };
        case "RESET": return { ...state, counter: 0 };
        default: return state;
    }
}

export const StoreProvider = (props: any): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={[state, dispatch]}>{props.children}</Store.Provider>
}