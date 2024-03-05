import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Layout from './layout';
import Two from '../pages/Two';
import Three from '../pages/Three';
import Four from '../pages/Four';
import Five from '../pages/Five';

const Routers: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/*" element={<Home />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
          <Route path="/four" element={<Four />} />
          <Route path="/five" element={<Five />} />

          <Route path="/404" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
