import React from 'react';
import Adresse from './components/adresse.js';
import { Router, Scene } from 'react-native-router-flux';
import fiche_grandtheatre from './components/fiche_grandtheatre.js';
import fiche_victoire from './components/fiche_victoire.js';




export default class App extends React.Component {
  render() {
      return (
        // <Adresse/>
        <Router>
            <Scene key="root">
              <Scene key="index"
                component={Adresse}
                initial/>
              <Scene key="detail"
                component={fiche_grandtheatre}/>
              <Scene key="fiche_victoire"
                component={fiche_victoire}/>
            </Scene>
              
        </Router>
      );
  }
}