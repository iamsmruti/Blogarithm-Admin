import { Box, Container, Typography, Divider } from '@mui/material';
import Editor from '../components/Editor'
import { useSelector } from 'react-redux';
import { postStore } from '../features/postData';
import { userState } from '../features/userAuth'
import { useEffect, useState } from 'react'

const CreateNew = () => {
    const post = useSelector(postStore)
    const user = useSelector(userState)
    const token = user.token
    console.log(token)

    return (
        <div className='mainContainer'>
            <Typography sx={{pt: 3, mb: 1}} variant='h5'>Create the Best ! </Typography>
            <Divider sx={{mb: 3}}/>
            <Editor/>
        </div>
    );
}
 
export default CreateNew;