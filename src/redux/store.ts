import { makeNestedStore, AppThunk, createConnectProps } from 'tquinlan92-typescript-redux-utils';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { pricingStateThunkActions, PricingState, pricingState } from './pricing/state';
import { merge } from 'lodash';

export interface AppState {
    pricing: PricingState;
}

const initialStates = {
    pricing: pricingState
};

const logger = createLogger({
});

export const { actions: storeActions, reducers, selectors, initalState, reducer, store } = 
makeNestedStore(initialStates, [logger, thunk]);

const thunkActions = {
    pricing: pricingStateThunkActions
};

export const actions = merge(storeActions, thunkActions);

export type AppStateThunk = AppThunk<AppState>;

export const connectProps = createConnectProps<AppState>();




