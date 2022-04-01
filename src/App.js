import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Calendar } from './Components'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Calendar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
