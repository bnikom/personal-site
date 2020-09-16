import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from '../components/Home';
import TravelMap from '../components/TravelMap';
import Charities from '../components/Charities';
import Resume from '../components/Resume';


const Routes = ({ GDIMPoff }) => {
  const context = {};
  return (
    <BrowserRouter context={context}>
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <Home {...props} GDIMPoff={GDIMPoff} />}
        />
        <Route
          path='/map'
          component={TravelMap}
        />
        <Route
          path='/charities'
          render={(props) => <Charities {...props} GDIMPoff={GDIMPoff} />}
        />
        <Route
          path='/resume'
          component={Resume}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;