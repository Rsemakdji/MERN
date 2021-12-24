import React, { Component, Fragment } from 'react';
import './App.css';

//components
import Road from './components/navigation/Road';
import NavBar from './components/navigation/navBar.jsx';


class App extends Component {
  render() {
    return (

      <Fragment>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous" 
        />
        <NavBar></NavBar>
        <Road></Road>
      </Fragment>
    )
  }
}
export default App;
