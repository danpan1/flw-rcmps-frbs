/* eslint-disable no-use-before-define */
// https://flow.org/en/docs/react/redux/
// @flow


import type {AppStateType} from 'flow-types/storesTypes';

export type GetState = () => AppStateType;
export type PromiseAction = Promise<Action>;
type Action = {
  +type: string,
};
export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>,
) => any;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
