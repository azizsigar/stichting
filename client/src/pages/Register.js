import { useState } from 'react';
import { NavLink } from 'react-router-dom';
 import axios from 'axios';
 import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const navigate = useNavigate();

const [data,setData] = useState({
  name: '',
  email: '',
  password: '',
})
const registerUser = async (e) => {
  e.preventDefault()
  const{name,email,password}=data
try {
  const {data} = await axios.post('/register',{
    name,email,password
  })
if(data.error){
  toast.error(data.error)
}
else{ navigate('/login')
toast.success('account created please login')}
} catch (error) {
  
}
}
  return (
    <div>
      <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='my name is' value={data.name} onChange={(e)=> setData({...data, name: e.target.value})}></input>
        <label>Email</label>
        <input type='email' placeholder='my email is' value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}></input>
        <label>Password</label>
        <input type='password' placeholder='my password is' value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}></input>
        <br>
        </br>
        <button type='submit'>submit</button>
      </form>
      </div>
<br></br>
<br></br>
      <NavLink to='/login'>I already have an account</NavLink>
      <br></br>
      <br></br>
    </div>
  );
}