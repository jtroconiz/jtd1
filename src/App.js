import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Layout from './sections/Layout';
import Home from './pages/Home';
// import AboutMe from './sections/Intro';
// import WhyJTD from './pages/WhyJTD';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HashRouter >
      <Layout>
        <div style={{ marginTop: '100px' }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/aboutme" element={<AboutMe />} /> */}
            {/* <Route path="/whyjtd" element={<WhyJTD />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Layout>
    </HashRouter>
  );
}

export default App;
