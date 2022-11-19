import { Paper, TextField, Box, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Post = () => {
    return (
        <Container>
            <Paper elevation={3} sx={{ width: "60%", margin: "30px auto" }}>
                <Box sx={{ padding: "20px" }}>
                    <Typography variant="h6" sx={{fontWeight: 600}}>Upload a post</Typography>
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        name='title'
                        variant="outlined"
                        fullWidth
                        sx={{marginTop: '20px'}}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Location"
                        name="location"
                        variant="outlined"
                        fullWidth
                        sx={{marginTop: '20px'}}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Price"
                        name="price"
                        variant="outlined"
                        fullWidth
                        sx={{marginTop: '20px'}}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Description"
                        name="description"
                        variant="outlined"
                        fullWidth
                        sx={{marginTop: '20px'}}
                    />
                    
                    <Box sx={{marginTop: '20px'}}>
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                    </Box>
                    <Box sx={{marginTop: '10px', width:"100%", display:'flex', justifyContent: 'end'}}>
                        <Button variant="contained" sx={{marginTop: '20px'}}>Submit</Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default Post;
