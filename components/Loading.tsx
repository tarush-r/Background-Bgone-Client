import React from 'react'
import { Heading, Spinner } from 'grommet'
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Loading = ({output,setOutput,img_id}) => {
    const {user, logout} = useAuth()
    async function upload(){
        const x = await axios.get('/segment',{
            params:{
                img_id:img_id,
                user_id:user.uid
            },
        })
        console.log(x)
        setOutput({status:true, img_url:x.data.new_image_url})
    }


    upload()
    return(
    <>
        <Heading size='small'>Removing Background</Heading>
        <Spinner size = 'large'/>
    </>
    )
}

export default Loading

