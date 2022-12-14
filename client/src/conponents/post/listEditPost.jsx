import React from 'react'
import { Box, Typography, Button, Avatar } from "@mui/material";
import { Container } from "@mui/system";
import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Search } from '../search';
import axios from 'axios';
import { Link } from 'react-router-dom';




const ListEditPost = () => {
    
    // fetchData()
    const [posts, setPosts] = useState();
    
    useEffect(()=>{
        async function fetchData() {
            axios.get("http://localhost:4000/api/post/getByUser", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "token"
                    )}`,
                },
            })
              .then(data => {
                setPosts(data.data.post)
              })
          }
          fetchData();
    },[])
    
    // if (!posts) {
    //     return (
    //         <Container sx={{
    //             display: 'block', 
    //             justifyContent: 'center',
    //             backgroundColor: 'red',
                
    //             }}>
    //         <Box>
    //             <Typography>Khong tim thay</Typography>
    //         </Box>
    //         </Container>
    //     )
    // }
  return (
    <Container sx={{
        display: 'block', 
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',

        overflowY: 'auto',
        overflowX: 'auto'

        }}>
            <h1>My posts</h1>
       {posts?.map(element =>
            <Box
                key={element.id}
             sx={{
                
                border: '1px solid black',
                borderRadius: '8px',

                margin: '9px auto',

                width: '70%',
                padding: '15px',
            }}>
            <span>
                {/* <img className="avatar" src="https://www.w3schools.com/howto/img_avatar.png"></img> */}
                <Avatar src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
            </span>
            <span className="userPost">
                Huy B??i
            </span>
            <span className="imagePost">
                <img src={element.imageURL} alt='somepicture'/>
            </span>
            <span className="titlePost">
                {element.title}
            </span>
            <span>
                <Typography>T??nh tr???ng:</Typography>
                <span style={{
                    color: element.status === 'EMPTY' ? "red" : "rgb(11, 173, 73)", 
                    fontWeight: 'bold',
                    marginLeft: '5px'

                }}>
                    {element.status}
                </span> 
            </span>
            <span className="pricePost">
                {element.price} <Typography style={{fontSize: 'medium',
    fontWeight: 'bold', marginLeft: '5px'}}>?????ng / th??ng</Typography>
            </span>
            <span className="locationPost">
                {element.location}
            </span>
            <span className="descriptionPost">
                <Typography>
                    <span style={{margin: '0', fontSize: '20px', fontWeight: 'bold'}}>M?? t???:</span>
                    {element.desc || <span>Ph??ng kh?? r???ng n??n ??? ???????c t??? 3-4 ng?????i. Mi???n ph?? g???i xe, mi???n ph?? wifi... Ph??ng s???ch s???, trang b??? full to??n b??? n???i th???t ch??? c???n x??ch valo v??o ??? ngay!!</span>}
                    <a href="#" style={{fontStyle:'italic', fontSize: '13px'}}>Xem chi ti???t</a>

                </Typography>
            </span>
            <span style={{
                display: 'flex',
                justifyContent: 'end'
            }}>
                <Button variant="outlined">Li??n h??? ngay: {<Typography>01212121</Typography>}</Button>
                <Link to={`/edit_post?id=${element.id}`}> <Button variant="contained" >Edit this post</Button></Link>

            </span>
            </Box>
        )}
    </Container>
  )
}
export default ListEditPost;