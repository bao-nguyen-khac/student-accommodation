import { Paper, TextField, Box, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";

const Post = () => {
    const [data, setData] = useState({
        title: "",
        location: "",
        price: "",
        desc: "",
    });
    const [image, setImage] = useState();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleChangeImage = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("location", data.location);
        formData.append("price", data.price);
        formData.append("desc", data.desc);
        formData.append("image", image);

        try {
            await axios.post(
                "http://localhost:4000/api/post/create",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            alert("sucessfull");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Paper elevation={3} sx={{ width: "60%", margin: "30px auto" }}>
                <Box sx={{ padding: "20px" }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Upload a post
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        name="title"
                        variant="outlined"
                        onChange={handleChange}
                        fullWidth
                        sx={{ marginTop: "20px" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Location"
                        name="location"
                        variant="outlined"
                        onChange={handleChange}
                        fullWidth
                        sx={{ marginTop: "20px" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Price"
                        name="price"
                        variant="outlined"
                        onChange={handleChange}
                        fullWidth
                        sx={{ marginTop: "20px" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Description"
                        name="desc"
                        variant="outlined"
                        onChange={handleChange}
                        fullWidth
                        sx={{ marginTop: "20px" }}
                    />

                    <Box sx={{ marginTop: "20px" }}>
                        <input
                            accept="image/*"
                            name="imageName"
                            id="contained-button-file"
                            onChange={handleChangeImage}
                            multiple
                            type="file"
                        />
                    </Box>
                    <Box
                        sx={{
                            marginTop: "10px",
                            width: "100%",
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <Button
                            onClick={handleSubmit}
                            variant="contained"
                            sx={{ marginTop: "20px" }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default Post;
