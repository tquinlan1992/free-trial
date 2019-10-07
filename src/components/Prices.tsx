import React from 'react';
import { actions, connectProps } from "../redux/store";
import { Grid, Button, Switch } from '@material-ui/core';
import { PlanOptions, PlanRates } from '../redux/pricing/state';
import { map } from 'lodash';
import { plans } from './plans';

interface PlanInfo {
    title: string;
    monthlyPrice: string;
    annualPrice: string;
}

export const { Connected: Pricing } = connectProps(
    (state) => {
        return state.pricing;
    },
    {
        selectPlan: actions.pricing.selectedPlan,
        unselectPlan: () => actions.pricing.unselectPlan(undefined),
        toggleSelectedPlaneRate: () => actions.pricing.toggleSelectedPlanRate(undefined)
    }
)(({ selectPlan, selectedPlan, unselectPlan, selectedPlanRate, toggleSelectedPlaneRate }) => {
    if (selectedPlan === PlanOptions.noneSelected) {
        return (
            <>
                <Switch
                    checked={selectedPlanRate !== PlanRates.monthly}
                    onChange={toggleSelectedPlaneRate}
                    value={selectedPlanRate}
                />
                <Grid container justify="center" spacing={0}>
                    {map(plans, (planInfo, value) => {
                        const selectedPrice = getSelectedPrice( { selectedPlanRate, planInfo });
                        return <PricingCard {...{title: planInfo.title, price: selectedPrice, key: value, onClick: () => selectPlan(Number(value) as PlanOptions)}} />
                    })}
                </Grid>
            </>
        )
    } else {
        const planInfo = plans[selectedPlan];
        const selectedPrice = getSelectedPrice( { selectedPlanRate, planInfo });
        return (
            <Grid container justify="center" spacing={0}>
                <Button onClick={unselectPlan}>Go Back</Button>
                <PricingCard {...{title: planInfo.title, price: selectedPrice}} key={selectedPlan} />
            </Grid>
        )
    }
});

function getSelectedPrice({selectedPlanRate, planInfo}: {selectedPlanRate: PlanRates, planInfo: PlanInfo}) {
    return selectedPlanRate === PlanRates.monthly ? planInfo.monthlyPrice : planInfo.annualPrice;
}

const PricingCard: React.FunctionComponent<{ title: string; onClick?: () => void; price: string; }> = ({ title, onClick, price }) => {
    return (
        <Grid item>
            <Grid item xs={12} style={{ backgroundColor: '#676DBC', height: '55px', color: 'white' }}>
                {title}
            </Grid>
            <Grid item justify="center" style={{ borderColor: '#D8D8D8', borderStyle: 'solid', borderWidth: '1px', height: '200px', width: '200px' }}>
                {`$${price}`}
                <br />
                <Button onClick={onClick}>Select Plan</Button>
            </Grid>
        </Grid>
    );
}
