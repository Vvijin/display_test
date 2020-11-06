import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
// import { Table } from 'react-bootstrap'


import { fetchUser, fetchTodo, fetchAlbum} from './function';

export default class Users extends React.Component {
    constructor(props) {
    super(props);
    this.state = {users: []};
    }

    async componentDidMount() {

    let resultatUsers  = await fetchUser() 
    resultatUsers.map(async(res) => {
       let resultatTodo = await fetchTodo(res.id)  
       res.nombreTodo = resultatTodo.length
       let resultatAlbum = await fetchAlbum(res.id)  
       res.nombreAlbum = resultatAlbum.length

    })
    this.setState({users: resultatUsers})
    // console.log(this.state.users[0])
     
    }

    
    render() {
        
        return (
      
    <div>
        <table bordered>
        <thead>
            <tr>

            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
            <th>Compagny.name</th>
            <th>Nb_todos</th>
            <th>Nb_albums</th>

            </tr>
        </thead>
      <tbody >

      {this.state.users.map((user) => {console.log(user); return (<tr> <th> {user.id}  </th> 
      <th> <Link to={`/user/${user.id}`} target="_blank" > {user.name} </Link> </th> 
      <th> {user.email}</th>
      <th> <a href={'http://'+user.website} target="_blank" > {user.website}  </a> </th>
      <th> {user.company.name} </th>
      <th> {user.nombreTodo} </th>
      <th> {user.nombreAlbum} </th>
      </tr>)})}
      </tbody>
        </table>
           

        
    </div>
 
        );
    }
}