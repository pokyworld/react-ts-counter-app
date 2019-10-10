import { IAction, IState, IDispatch } from "../interfaces";

export const incrementCounterAction = (state: IState, dispatch: IDispatch | any): IAction => dispatch({ type: "INCREMENT", payload: 1 });
export const decrementCounterAction = (state: IState, dispatch: IDispatch | any): IAction => dispatch({ type: "DECREMENT", payload: 1 });
export const resetCounterAction = (state: IState, dispatch: IDispatch | any): IAction => dispatch({ type: "RESET" });