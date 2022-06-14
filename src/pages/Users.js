import { Typography, Divider } from '@mui/material'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserItem from "../components/Users/UserItem";
import { userState } from '../features/userAuth'
import { allUsers } from '../features/userData'

const Users = () => {
    const dispatch = useDispatch()
    const authState = useSelector(userState)
    const [users, setUsers ] = useState()
    const token = authState.token
    console.log(token)
    useEffect(() => {
        fetch('http://localhost:4500/api/users/all',{
            method: 'GET',
            headers: {
                "auth-token" : token
            }
        }).then((res) => res.json()).then((res) => {
            dispatch(allUsers(res))
            setUsers(res)
        })
    }, []);
    return (
        <div  className="mainContainer">
            <Typography sx={{pt: 3, mb: 1}} variant='h5'>All Users</Typography>
            <Divider sx={{mb: 3}}/>
            {users?.map((user) => (
                <UserItem user={user}/>
            ))}
        </div>
    );
}
 
export default Users;