// import React from "react";
import { IState, IAction } from "../interfaces";

const initialState = {
    counter: 0
};

const reducer = (state: IState = initialState, action: IAction): IState => {

    // console.log(state, action);

    const { type, payload } = action;
    switch (type) {
        case "INCREMENT": return { ...state, counter: state.counter += payload };
        case "DECREMENT": return { ...state, counter: state.counter -= payload };
        case "RESET": return { ...state, counter: 0 };
        default: return state;
    }

};

export default reducer;