import axios from 'axios';

export async function fetchAlbum(id) {
    
    const  res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
    return res.data;
    //console.log(res.data);
   
}

export async function fetchPhoto(id) {
    
    const  res = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    return res.data;
    //console.log(res.data);
   
}