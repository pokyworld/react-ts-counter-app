import { Dispatch } from "react";

export type IDispatch = Dispatch<IAction>;

export interface IState {
    counter: number
};

export interface IAction {
    type: string,
    payload: any
};

export interface IIncrementAction {
    state: IState,
    dispatch: IDispatch,
    incrementCounterAction: IAction
};

export interface IDecrementAction {
    state: IState,
    dispatch: IDispatch,
    decrementCounterAction: IAction
};







