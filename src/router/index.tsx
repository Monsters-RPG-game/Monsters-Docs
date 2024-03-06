import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Contributions, Fights, FourOhFour, Gateway, Head, Home, Messages, Roadmap, Users, WebClient } from '../pages';
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
          <Route path="/services/users" element={<Users />} />
          <Route path="/services/fights" element={<Fights />} />
          <Route path="/services/messages" element={<Messages />} />
          <Route path="/services/head" element={<Head />} />
          <Route path="/services/webclient" element={<WebClient />} />
          <Route path="*" element={<FourOhFour />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Routers;
