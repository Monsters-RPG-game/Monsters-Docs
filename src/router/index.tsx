import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Contributions, FourOhFour, Gateway, Home, Roadmap } from '../pages';
import Layout from './layout';

const Routers: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/two" element={<Contributions />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/services/gateway" element={<Gateway />} />
          <Route path="*" element={<FourOhFour />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Routers;
