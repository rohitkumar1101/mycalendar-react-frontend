import React from 'react';
import {Calendar, Form, NavBar } from './Components/index';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <Form />
          </div>

          <div className="col-sm-9">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
