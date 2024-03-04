import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Layout from './layout';

const Routers: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/*" element={<Home />} />
          <Route path="/404" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
