import { PlanOptions } from "../redux/pricing/state";

export const plans = {
    [PlanOptions.entrepreneur]: {
        title: 'Entrepreneur',
        monthlyPrice: '29',
        annualPrice: '23'
    },
    [PlanOptions.growth]: {
        title: 'Growth',
        monthlyPrice: '99',
        annualPrice: '79'
    },
    [PlanOptions.smallBusiness]: {
        title: 'Small Business',
        monthlyPrice: '249',
        annualPrice: '199'
    },
    [PlanOptions.largeBusiness]:
    {
        title: 'Large Business',
        monthlyPrice: '499+',
        annualPrice: '399+'
    }
};