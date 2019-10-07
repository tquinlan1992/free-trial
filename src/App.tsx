import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Pricing } from './components/Prices';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Pricing />
    </Provider>
  );
}

export default App;
