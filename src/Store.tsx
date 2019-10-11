import React, { createContext, useReducer } from "react";
import reducer from "./reducers";
import { IState } from "./interfaces";

const initialState = {
    counter: 0
};

export const Store: any = createContext<IState>(initialState);

export const StoreProvider = (props: any): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={[state, dispatch]}>{props.children}</Store.Provider>
}