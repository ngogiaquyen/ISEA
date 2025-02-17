import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';

import { privateRouters, publicRouters } from './routes';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  // dissable right mouse click
  const handleContextMenu = (e)=>{
    e.preventDefault();
  }
  return (
    <Router>
      <div className="app" onContextMenu={handleContextMenu}>
        <Routes>
          {/* public routes */}
          {publicRouters.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page {...route.props} />
                  </Layout>
                }
              />
            );
          })}

          {/* private routes */}
          {privateRouters.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
