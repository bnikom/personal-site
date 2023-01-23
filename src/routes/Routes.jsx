import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from '../components/Home';
import TravelMap from '../components/TravelMap';
import Charities from '../components/Charities';
import Resume from '../components/Resume';


const RoutesGroup = ({ GDIMPoff }) => {
  const context = {};
  return (
    <BrowserRouter context={context}>
      <Routes>
        <Route
          path='/'
          element={<Home GDIMPoff={GDIMPoff} />}
        />
        <Route
          path='/map'
          element={<TravelMap />}
        />
        <Route
          path='/charities'
          element={<Charities GDIMPoff={GDIMPoff} />}
        />
        <Route
          path='/resume'
          element={<Resume />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesGroup;