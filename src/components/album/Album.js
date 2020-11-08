import React from 'react';
import { Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {fetchPhoto, fetchAlbum} from './function';

export default class Album extends React.Component {
    constructor(props) {
    super(props);
    this.state = { 
    album:{}, photos:[], userid:0
};

    }

    async componentDidMount() {

    
    const { match: { params } } = this.props;
    let resultatAlbum= await fetchAlbum(params.albumid) 
    let resultatPhoto= await fetchPhoto(params.albumid) 
    //console.log(params)
    this.setState({album: resultatAlbum, photos: resultatPhoto, userid:params.userid})
     
    }

    
    render() {
        
        return (
      
            <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        {this.state.photos.map((photo) =>   <img url={photo.thumbnailUrl} /> )}
                        <Card.Title>{this.state.album.title}</Card.Title> 
                        <Button variant="primary" href={`/user/${this.state.userid}`}>Retour</Button>
                    </Card.Body>
                </Card>
                
            </div>
        );
     }
    
}