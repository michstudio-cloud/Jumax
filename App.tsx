import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DrainCleaning from './pages/DrainCleaning';
import GeneralPlumbing from './pages/GeneralPlumbing';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import { ROUTES } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.DRAIN_CLEANING} element={<DrainCleaning />} />
          <Route path={ROUTES.PLUMBING} element={<GeneralPlumbing />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.PRIVACY} element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;