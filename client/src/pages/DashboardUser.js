import {useContext} from 'react';
import { userContext } from '../context/userContext';

export default function DashboardUser() {
    const {user} = useContext(userContext)
  return (
    <div>DashboardUser
        {!!user && (<h2> wellcome {user.name}</h2>)}
        <p>name</p>
        <p>mail adress</p>
        <p>photo</p>
        <p>location</p>
        <p>hobbies</p>
        <p>applied programs</p>
        <p>log out</p>
    </div>
  )
}
