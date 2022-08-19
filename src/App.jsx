import React from 'react';
import './assets/styles/typography.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import routes from './router/routes';

function App() {
  return (
    <Routes>
      {routes.map(({ path, component }) => <Route path={path} element={component} />)}
    </Routes>
  );
}

export default App;
