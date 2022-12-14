import React from 'react'
import { Box, Typography, Button, Avatar } from "@mui/material";
import { Container } from "@mui/system";
import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Search } from '../search';




const Listpost = () => {
    
    // fetchData()
    const [posts, setPosts] = useState();
    
    useEffect(()=>{
        async function fetchData() {
            fetch("http://localhost:4000/api/post/get")
              .then(response =>  response.json())
              .then(data => setPosts(data.posts))
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
            <Search setPosts={setPosts}/>
       {posts?.map(element =>
            <Box sx={{
                
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
                {element.user.fullname}
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
                    {element.desc || null}
                    <a href="#" style={{fontStyle:'italic', fontSize: '13px'}}>Xem chi ti???t</a>

                </Typography>
            </span>
            <span style={{
                display: 'flex',
                justifyContent: 'end'
            }}>
                <Button variant="outlined">Li??n h??? ngay: {element.user.phone}</Button>
               

            </span>
            </Box>
        )}
    </Container>
  )
}
export default Listpost;