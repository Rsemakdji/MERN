import React from 'react';


// import page 
import Accueil from '../../pages/Accueil.js';
import Infos from '../../pages/club/Infos.js';
import News from '../../pages/club/News';
import Admin from '../../pages/admin/Admin.js';
import Judo from '../../pages/activites/Judo.js';
import Jujitsu from '../../pages/activites/Jujitsu.js';
import Taiso from '../../pages/activites/Taiso.js';
import Inscription from '../../pages/login/Inscription.js';
import Connexion from '../../pages/login/Connexion';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//route

function Road() {

  return (
    <div className="route">

      <Router>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/Infos" exact component={Infos} />
          <Route path="/Actualites" exact component={News} />
          <Route path="/Admin" exact component={Admin} />
          <Route path="/Judo" exact component={Judo} />
          <Route path="/Jujitsu" exact component={Jujitsu} />
          <Route path="/Taiso" exact component={Taiso} />
          <Route path="/Inscription" exact component={Inscription} />
          <Route path="/Connexion" exact component={Connexion} />
          <Route path="/" component={() => <div> 404 NOT FOUND </div>} />
        </Switch>
      </Router>
    </div>

  );
}



export default Road;