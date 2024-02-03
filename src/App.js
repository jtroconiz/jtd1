import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './sections/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects'; 
import NotFound from './pages/NotFound';

function App() {
  return (
 
      <BrowserRouter >
        <Layout>
        <div >
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </div> 
        </Layout>
      </BrowserRouter>
 
     
  );
}

export default App;
