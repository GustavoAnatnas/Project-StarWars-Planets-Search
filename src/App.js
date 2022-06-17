import React from 'react';
import './App.css';
import AppProvider from './context/Provider';
import Planets from './components/Planets';

function App() {
  return (
    <main>
      <AppProvider>
        <Planets />
      </AppProvider>
    </main>
  );
}

export default App;
