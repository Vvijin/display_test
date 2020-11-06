import React, { Component } from 'react';
import {Navbar, Nav, Form, Button, FormControl}from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
    <Navbar bg="light" variant="light">
   
       <Navbar.Brand>Display</Navbar.Brand>
       <Nav className="mr-auto">
         <Nav.Link href="/users">Home</Nav.Link>
         <Nav.Link href="/">Profil</Nav.Link>
       </Nav>
     </Navbar>
    
    <Router> 
    <Switch>
          <Route exact path="/users">
            <Users/>
          </Route>
          <Route exact path="/user/:id" >
            <Users/>
          </Route>
        </Switch>
    </Router>
    
     </div>


  );
  
}

export default App;
