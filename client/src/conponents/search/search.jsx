import { React, memo, useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";

function Search(props) {
    const [location, setLocation] = useState('');
    const handleSearch = async (e) => {
        try {
            
            const res = await axios.get(`http://localhost:4000/api/post/search?location=${location}`);
            console.log(res);
            if (res) {
                props.setPosts(res.data.posts);
            }
            
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
            <Box
                noValidate
                sx={{marginTop: '10px', display:'flex', justifyContent:'center', alignItems:'center'}}
            >
                <TextField
                    required
                    id="search"
                    label="Enter location..."
                    name="search"
                    sx={{width: '30%'}}
                    onChange={(e) => setLocation(e.target.value)}
                />
                
                <Button
                    type="submit"
                    variant="contained"
                    onClick={handleSearch}
                    sx={{height:'55px',ml: 1}}
                >
                    Search
                </Button>
            </Box>    
    )
}
export default memo(Search);