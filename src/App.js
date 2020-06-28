import React from 'react';
import {Calendar, Form, NavBar } from './Components/index';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3">
            <Form />
          </div>
          {/* <div className="col-md-1"></div> */}
          <div className="col-sm-12 col-md-8">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
