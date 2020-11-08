import axios from 'axios';

export async function fetchProfil(id) {
    
    const  res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.data;
    //console.log(res.data);
   
}

export async function fetchAlbum(id) {
    
    const  res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
    return res.data;
    //console.log(res.data);
   
}
