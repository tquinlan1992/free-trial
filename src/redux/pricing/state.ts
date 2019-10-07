import { mergeStateWithActions } from 'tquinlan92-typescript-redux-utils';
import { selectPricing } from './selectPricing';
 
export enum PlanOptions {
    noneSelected,
    entrepreneur,
    growth,
    smallBusiness,
    largeBusiness
}

export enum PlanRates {
    monthly,
    annual
}

export interface PricingState {
    selectedPlan: PlanOptions;
    selectedPlanRate: PlanRates;
}

const pricingInitialState: PricingState = {
    selectedPlan: PlanOptions.noneSelected,
    selectedPlanRate: PlanRates.monthly
}

export const pricingState = mergeStateWithActions(
    pricingInitialState,
    {
        unselectPlan: state => {
            state.selectedPlan = PlanOptions.noneSelected;
        },
        toggleSelectedPlanRate: state => {
            if (state.selectedPlanRate === PlanRates.monthly) {
                state.selectedPlanRate = PlanRates.annual;
            } else {
                state.selectedPlanRate = PlanRates.monthly;
            }
        }
    }
);

export const pricingStateThunkActions = {
    selectPricing
}