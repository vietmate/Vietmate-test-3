import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import ExperienceDetail from './pages/ExperienceDetail';
import About from './pages/About';
import HelpCenter from './pages/HelpCenter';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<HelpCenter />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
