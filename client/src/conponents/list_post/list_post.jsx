import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';


const Listpost = () => {
    
    // fetchData()
    const [posts, setPosts] = useState()
    const ObjectRow = () => {
        <Box sx={{padding: '20px'}}>
            hehe
        </Box>
    }
    useEffect(()=>{
        async function fetchData() {
            fetch("http://localhost:4000/api/post/get")
              .then(response =>  response.json())
              .then(data => setPosts(data.posts))
          }
          fetchData();
    },[])
    console.log(posts)

    
  return (
    <Container sx={{width: "60%", margin: "30px auto"}}>
       {posts?.map(element =>
            <Box sx={{border: '1px solid black', margin: '20px'}}>
                

                    <h3 id={element.title}>{element.title}</h3>
                    
                    <Typography 
                    id={element.desc} >
                        {element.desc}
                    </Typography>
                    
                    <Typography style={{fontStyle: 'italic', justifyContent: 'flex-end', fontSize: '15px'}}
                    id={element.location}>
                        {element.location}
                    </Typography>
                    <Typography id={element.price}>
                        {element.price}
                    </Typography>
                    <Typography id={element.status} sx={{fontStyle: 'bold', fontWeight: '20px'}}>
                        {element.status}
                    </Typography>
                    <img style={{width: '50%', height: '50%'}} src={element.imageURL} alt="picture"></img>
                    

            </Box>
        )}
    </Container>
  )
}
export default Listpost;