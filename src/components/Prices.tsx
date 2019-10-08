import React from 'react';
import { actions, connectProps } from "../redux/store";
import { Grid, Button, Switch, makeStyles } from '@material-ui/core';
import { PlanOptions, PlanRates } from '../redux/pricing/state';
import { map } from 'lodash';
import { plans } from './plans';

interface PlanInfo {
    title: string;
    monthlyPrice: string;
    annualPrice: string;
}

const annualBlue = '#50C1DC';
const monthlyPurple = '#676DBC';

function getPlanRateColor(selectedPlanRate: PlanRates) {
    return selectedPlanRate === PlanRates.annual ? monthlyPurple : annualBlue;;
}

function colorSwitchStyles(color: string) {

      return {
        switchBase: {
          color: 'white',
          '&$checked + $track': {
            backgroundColor: color,
          }
        },
        checked: {},
        track: {
            backgroundColor: color
        },
      };
}

const switchColors = makeStyles({
    annualBlue: colorSwitchStyles(annualBlue),
    monthlyPurple: colorSwitchStyles(monthlyPurple)
  });



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
        const switchStyle = switchColors().annualBlue;
        console.log('switchStyle', switchStyle);
        return (
            <>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ color: '#676DBC', height: '50px' }}
                >
                    <Switch
                        checked={selectedPlanRate !== PlanRates.monthly}
                        onChange={toggleSelectedPlaneRate}
                        value={selectedPlanRate}
                        className={monthlyPurple}
                    />
                </Grid>
                {map(plans, (planInfo, value) => {
                    const selectedPrice = getSelectedPrice({ selectedPlanRate, planInfo });
                    return <PricingCard selectedPlanRate={selectedPlanRate} {...{ title: planInfo.title, price: selectedPrice, key: value, onClick: () => selectPlan(Number(value) as PlanOptions) }} />
                })}
            </>
        )
    } else {
        const planInfo = plans[selectedPlan];
        const selectedPrice = getSelectedPrice({ selectedPlanRate, planInfo });
        return (
            <>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ color: '#676DBC', height: '50px' }}
                >
                </Grid>

                <PricingCard selectedPlanRate={selectedPlanRate} {...{ title: planInfo.title, price: selectedPrice }} hideSelectPlan={true} key={selectedPlan} />
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ color: '#676DBC' }}
                >
                    <Button onClick={unselectPlan}>Go Back</Button>
                </Grid>
            </>
        )
    }
});

function getSelectedPrice({ selectedPlanRate, planInfo }: { selectedPlanRate: PlanRates, planInfo: PlanInfo }) {
    return selectedPlanRate === PlanRates.monthly ? planInfo.monthlyPrice : planInfo.annualPrice;
}

const PricingCard: React.FunctionComponent<{ title: string; onClick?: () => void; price: string; hideSelectPlan?: boolean; selectedPlanRate: PlanRates }> = ({ title, onClick, price, hideSelectPlan = false, selectedPlanRate }) => {

    const SelectPlanButton = () => hideSelectPlan ? null : <Button onClick={onClick}>Select Plan</Button>;
    const backgroundColor = getPlanRateColor(selectedPlanRate);
    return (
        <Grid item spacing={8}>
            <Grid item xs={12} style={{ backgroundColor, height: '55px', color: 'white' }}>
                {title}
            </Grid>
            <Grid item justify="center" style={{ borderColor: '#D8D8D8', borderStyle: 'solid', borderWidth: '1px', height: '200px', width: '200px' }}>
                {`$${price}`}
                <br />
                <SelectPlanButton />
            </Grid>
        </Grid>
    );
}
