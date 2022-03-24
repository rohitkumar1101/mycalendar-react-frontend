import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Calendar, Text } from './Components'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Calendar} />
        <Route exact path={`${process.env.PUBLIC_URL}/hbd`} component={Text} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
