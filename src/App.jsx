import React, { useState } from 'react';
import './App.css';
import './assets/styles/typography.css';
import Subscription from './components/Subscription';
import TariffCard from './components/TariffCard';
import TariffToggle from './components/TariffToggle';

function App() {
  const [activeTariff, setActiveTariff] = useState(0);
  const list = [
    ' + Enjoy on all your devices',
    ' + Watch on two screens',
    ' + Watch anywhere you want',
    ' + Resolution adapted to your device',
  ];
  const tariffs = [
    { id: 1, name: 'monthly' },
    { id: 2, name: '6 months' },
    { id: 3, name: 'Yearly' },
  ];
  return (
    <>
      <Subscription />
      <TariffCard
        title="monthly"
        description="At Infinity & Beyond you will find the best content about space."
        list={list}
        tariff="19,90"
      />
      <TariffToggle
        setActiveTariff={setActiveTariff}
        activeTariff={activeTariff}
        tariffs={tariffs}
      />
    </>
  );
}

export default App;
