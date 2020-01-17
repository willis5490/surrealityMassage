import React from 'react';
import { Route, Router, Switch } from "react-router-dom";

//create browser history
import History from './Pages/History/History.js'

//components
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

// pages
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import NotFound from './Pages/NotFound/NotFound'
import Appointments from './Pages/Appointments/Appointments'

function App() {
  return (
    <div className="App">
      <Router  history={History}>
         <div className="App">
        <Header></Header>
          
            <Switch>
              <Route exact path="/" render={props =><Home/>} />                 
              <Route exact path="/About" render={props =><About/>} /> 
              <Route exact path="/Contact" render={props =><Contact/>} />    
              <Route exact path="/Appointments" render={props =><Appointments/>} />                          
              <Route render={props =><NotFound/>}/>
              
            </Switch>
          
        <Footer></Footer>
        </div>
      </Router>

    </div>
  );
}

export default App;
