import axios from 'axios';
import React, { useEffect, useState } from 'react'
export default function Home() {
     const [users,setUsers]=useState([]);     //[ reactive value , setter]
     useEffect(()=>{
        loadUsers();
      },[]);
    const loadUsers=async()=>{
        const result= await axios.get("http://localhost:3000/users")
        setUsers(result.data);
     }
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user,index)=>(
      <tr key={index}>
      <th scope="row" >{index+1}</th>
      <td>{user.username}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button className='btn btn-outline-primary mx-2'>Edit</button>
        <button className='btn btn-danger mx-2'>Delete</button>
        <button className='btn btn-primary mx-2'>View</button>
      </td>
    </tr>
    ))}
  </tbody>
</table>
        </div>
    </div>
  )
}