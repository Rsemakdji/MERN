import React from 'react';


// onglet accueil
import Accueil from '../../pages/Accueil.js';
import Infos from '../../pages/Infos.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//route

function Road() {

  return (
    <div className="route">

      <Router>

        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/Infos" exact component={Infos} />
          <Route path="/" component={() => <div> 404 NOT FOUND </div>} />
        </Switch>
      </Router>




    </div>

  );
}



export default Road;