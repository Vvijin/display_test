import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { fetchProfil, fetchAlbum } from './function';

export default class Profil extends React.Component {
    constructor(props) {
    super(props);
    this.state = {user:{name:'',username:'',email:''}, 
    albums:[]
    };

    }

    async componentDidMount() {

    const { match: { params } } = this.props;
    let resultatInfo = await fetchProfil(params.id) 
    let resultatAlbum = await fetchAlbum(params.id) 
    //console.log(params)
    this.setState({user: resultatInfo, albums: resultatAlbum})
    console.log(this.state.user)

    }

    
    render() {
        
        return (
      
            <div>
                <Card id='card' style={{ width: '50rem'}}>
                    <Card.Header> Fiche utilisateur : </Card.Header>
                    <ListGroup variant="flush"> 
                        <ListGroup.Item>NAME: {this.state.user.name} </ListGroup.Item>
                        <ListGroup.Item>USERNAME : {this.state.user.username} </ListGroup.Item>
                        <ListGroup.Item> EMAIL : {this.state.user.email}</ListGroup.Item>
                        <ListGroup.Item> Albums :
                        {this.state.albums.map((album) => <li>  <Link to={`/album/${this.state.user.id}/${album.id}`}  target="_blank" > {album.title} </Link> </li> )}
                        </ListGroup.Item> 
                    </ListGroup>
                </Card>
                
            </div>
        );
     }
    
}