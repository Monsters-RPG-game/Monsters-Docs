import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';

const App: React.FC = () => {
  return (
    <main className="bg-gray-100 h-screen w-full overflow-hidden ">
      <Router>
        <AppRouter />
      </Router>
    </main>
  );
};

export default App;
