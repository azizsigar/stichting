import React,{useState} from 'react'
import axios from "axios";



export default function Login(){
const [data,setData]=useState({
    email: '',
    password: '',
})
    const loginUser = (e) => {
        e.preventDefault()
        axios.get('/')
    }

return (
    <div>
        <form onSubmit={loginUser}>
        <input type='email' placeholder='my mail adress is:' value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}></input>
        <input type='password' placeholder='password' value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}></input>
        <button type='submit'>Login</button>
        </form>
        </div>
  )
}
