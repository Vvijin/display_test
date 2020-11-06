import axios from 'axios';

export async function fetchUser() {
    
    const  res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data;
   
}

export async function fetchTodo(id) {
    
    const  res = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}&completed=true`)
    // console.log(res.data);
    return res.data;
    
   
}

export async function fetchAlbum(id) {
    
    const  res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
    // console.log(res.data);
    return res.data;
    
   
}