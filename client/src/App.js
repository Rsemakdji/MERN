import React, { Component, Fragment } from 'react';
import './App.css';
import './App.css';


//components
import Road from './components/navigation/Road';
import NavBar from './components/navigation/NavBar.jsx';
import LeftSide from './components/side-bar/left-side.js';
import RightSide from './components/side-bar/right-side.js';




class App extends Component {
  render() {
    return (

      <Fragment>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
        <NavBar></NavBar>
        <div className="container mt-3">
          <div className="row">
            <div className="col-2">
              <LeftSide></LeftSide>
            </div>
            <div className="col-8 text-white">
              <Road></Road>
            </div>
            <div className="col-2">
              <RightSide></RightSide>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default App;
