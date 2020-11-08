import React, { Component } from 'react';
import { Navbar, Nav, Form, Button, FormControl }from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Users from './components/users/Users';
import Profil from './components/profil/Profil';
import Album from './components/album/Album';
function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand>Display</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/users">Home</Nav.Link>
        </Nav>
      </Navbar>
    
      <Router> 
        <Switch>
            <Route exact path="/users" component={Users}/>
            <Route  path="/user/:id" component={Profil}/>
            <Route  path="/album/:userid/:albumid" component={Album}/>
        </Switch>
      </Router>
     </div>


  );
  
}

export default App;
