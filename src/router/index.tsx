import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as pages from '../pages';
import Layout from './layout';

const Routers: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<pages.Home />} />
          <Route path="/two" element={<pages.Contributions />} />
          <Route path="/contributions" element={<pages.Contributions />} />
          <Route path="/roadmap" element={<pages.Roadmap />} />
          <Route path="/newclient" element={<pages.NewClient />} />
          <Route path="/services/gateway" element={<pages.Gateway />} />
          <Route path="/services/users" element={<pages.Users />} />
          <Route path="/services/fights" element={<pages.Fights />} />
          <Route path="/services/messages" element={<pages.Messages />} />
          <Route path="/services/head" element={<pages.Head />} />
          <Route path="/services/webclient" element={<pages.WebClient />} />
          <Route path="*" element={<pages.FourOhFour />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Routers;
