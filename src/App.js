import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Layout from './sections/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HashRouter >
      <Layout>
        <div style={{ marginTop: '100px' }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Layout>
    </HashRouter>
  );
}

export default App;
