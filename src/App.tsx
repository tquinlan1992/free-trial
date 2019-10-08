import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Pricing } from './components/Prices';
import { Grid } from '@material-ui/core';
import teikametricsLogo from './free_trial_assets/Teika Logos/TeikaLogo_H_black.svg';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Grid container justify="center">
        <TeikametricLogo />
        <SimplePricintStructure />
        <SelectThePlanThatMatchesYourBusiness />
        <Pricing />
      </Grid>
    </Provider>
  );
}

export default App;

const CenteredGrid: React.FunctionComponent = ({ children }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      {children}
    </Grid>
  )
}

function SimplePricintStructure() {
  return (
    <CenteredGrid>
      <span style={{color:'#50C1DC'}}>OUR SIMPLE PRICING STRUCTURE</span>
    </CenteredGrid>
  );
}

function TeikametricLogo() {
  return (
    <CenteredGrid>
      <img src={teikametricsLogo} alt='not found' />
    </CenteredGrid>
  );
}

function SelectThePlanThatMatchesYourBusiness() {
  return (
    <CenteredGrid>
       Select the plan that matches your business
    </CenteredGrid> 
  );
}
