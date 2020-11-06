import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

import {fetchProfil} from './function';

export default class Profil extends React.Component {
    constructor(props) {
    super(props);
    this.state = {users};
    }

    async componentDidMount() {

    let resultatInfo = await fetchUser() 
    this.setState({users: resultatInfo})
    // console.log(this.state.users)
     
    }

    
    render() {
        
        return (
        <div>
            <ul> 
            {this.state.users.map(user => <li> <Link to={`/user/${user.id}`}> {user.name} </Link> </li>)}
            </ul>
        </div>
        );
    }
}