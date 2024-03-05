import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Layout from './layout';
import Two from '../pages/Two';

const Routers: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/two" element={<Two />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Routers;
