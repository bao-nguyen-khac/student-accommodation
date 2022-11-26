import { Paper, TextField, Box, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const EditPost = () => {
    const [data, setData] = useState({
        title: "",
        location: "",
        price: "",
        desc: "",
        imageURL: '',
    });
    const [image, setImage] = useState();
    const [searchParams] = useSearchParams();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleChangeImage = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("id", searchParams.get('id'));
        formData.append("title", data.title);
        formData.append("location", data.location);
        formData.append("price", data.price);
        formData.append("desc", data.desc);
        formData.append("image", image);

        try {
            await axios.post(
                "http://localhost:4000/api/post/update",
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

    useEffect(() => {
        const postRes = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:4000/api/post/getOne?id=${searchParams.get(
                        "id"
                    )}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
                setData({ ...res.data.post});
            } catch (error) {
                console.log(error);
            }
        };
        postRes();
    }, [searchParams]);

    return (
        <Container>
            <Paper elevation={3} sx={{ width: "60%", margin: "30px auto" }}>
                <Box sx={{ padding: "20px" }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Edit a post
                    </Typography>
                    <TextField
                        id="outlined-basic-1"
                        label="Title"
                        name="title"
                        variant="outlined"
                        value={data.title}
                        onChange={handleChange}
                        fullWidth
                        sx={{ marginTop: "20px" }}
                    />
                    <TextField
                        id="outlined-basic-1"
                        label="Location"
                        name="location"
                        variant="outlined"
                        value={data.location}
                        onChange={handleChange}
                        fullWidth
                        sx={{ marginTop: "20px" }}
                    />
                    <TextField
                        id="outlined-basic-1"
                        label="Price"
                        name="price"
                        variant="outlined"
                        value={data.price}
                        onChange={handleChange}
                        fullWidth
                        sx={{ marginTop: "20px" }}
                    />
                    <TextField
                        id="outlined-basic-1"
                        label="Description"
                        name="desc"
                        variant="outlined"
                        value={data.desc}
                        onChange={handleChange}
                        fullWidth
                        sx={{ marginTop: "20px" }}
                    />

                    <Box sx={{ marginTop: "20px" }}>
                        <input
                            accept="image/*"
                            name="imageName"
                            id="contained-button-file-1"
                            onChange={handleChangeImage}
                            multiple
                            type="file"
                        />
                    </Box>
                    <Box sx={{ marginTop: "20px" }}>
                        {data.imageURL && <img width={300} height={200} src={image ? image : data.imageURL} />}
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

export default EditPost;
