import React from 'react'
import { Box, Typography, Button, Avatar } from "@mui/material";
import { Container } from "@mui/system";
import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';


const Listpost = () => {
    
    // fetchData()
    const [posts, setPosts] = useState()
    
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
    <Container sx={{
        display: 'flex', 
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        overflowY: 'scroll'
        }}>
       {posts?.map(element =>
            <Box sx={{
                border: '1px solid black',
                borderRadius: '8px',
                margin: '20px',
                width: '70%',
                padding: '15px',
            }}>
            <span>
                {/* <img className="avatar" src="https://www.w3schools.com/howto/img_avatar.png"></img> */}
                <Avatar src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
            </span>
            <span className="userPost">
                Huy Bùi
            </span>
            <span className="imagePost">
                <img src={element.imageURL} alt='somepicture'/>
            </span>
            <span className="titlePost">
                {element.title}
            </span>
            <span>
                Tình trạng: 
                <span style={{
                    color: element.status === 'EMPTY' ? "red" : "rgb(11, 173, 73)", 
                    fontWeight: 'bold'
                }}>
                {element.status}
                </span> 
            </span>
            <span className="pricePost">
                {element.price}
            </span>
            <span className="locationPost">
                {element.location}
            </span>
            <span className="descriptionPost">
                <Typography>
                    <h4 style={{margin: '0'}}>Mô tả:</h4>
                    {element.description || <Typography>Phòng khá rộng nên ở được từ 3-4 người. Miễn phí gửi xe, miễn phí wifi... Phòng sạch sẽ, trang bị full toàn bộ nội thất chỉ cần xách valo vào ở ngay!!</Typography>}
                    <a href="#" style={{fontStyle:'italic', fontSize: '13px'}}>Xem chi tiết</a>
                </Typography>
            </span>
            <span style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <Button variant="outlined">Đặt cọc ngay</Button>
            </span>
            </Box>
        )}
    </Container>
  )
}
export default Listpost;