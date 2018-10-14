/* eslint-disable no-use-before-define */
// https://flow.org/en/docs/react/redux/
// @flow

import type {AppStateType} from 'flow-types/storesTypes';
import * as React from 'react';

export type GetState = () => AppStateType;
export type PromiseAction = Promise<Action>;
type Action = { +type: string };
export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>,
) => any;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

export type DataFromReduxType<mapDataToProps> = $Exact<
  $Call<mapDataToProps, AppStateType>,
>;
export type MethodsFromReduxType<mapDispatchToProps> = $Exact<
  $Call<mapDispatchToProps, Dispatch>,
>;
export type PropsFromParent<Props, mDataTP, mDisTP> = $Exact<
  $Diff<Props, { ...mDataTP, ...mDisTP }>,
>;
export type ConnectedComponentType<
  Props,
  mDataTP,
  mDisTP,
> = React.ComponentType<PropsFromParent<Props, mDataTP, mDisTP>>;
export type ReduxFetchable = {
  +_fetching: boolean,
  +_error: boolean,
  +_errorMessage: string,
};
