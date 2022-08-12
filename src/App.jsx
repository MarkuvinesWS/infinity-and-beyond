import React from 'react';
import './App.css';
import './assets/styles/typography.css';

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
    <div className="text-style-raleway-39-px-regular">
      Hello!
    </div>
  );
}

export default App;
