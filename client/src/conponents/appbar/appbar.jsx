import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";

const pages = [
    { name: "Bài đăng", link: "/", isLogin: false },
    { name: "Viết bài đăng", link: "/create_post", isLogin: true },
    { name: "Chỉnh sửa bài đăng", link: "/edit_post", isLogin: true },
];

const ResponsiveAppBar = () => {
    const { state, dispatch } = React.useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch({ type: "SET_USER", payload: { isLoginIn: false } });
        navigate("/signin");
    };
    const handleSignin = () => {
        navigate("/signin");
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>
                    <AdbIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <NavLink
                                key={page.link}
                                to={page.link}
                                style={{ textDecoration: "none" }}
                            >
                                <Typography>
                                    <Button
                                        key={page.name}
                                        sx={{
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                        }}
                                    >
                                        {page.name}
                                    </Button>
                                </Typography>
                            </NavLink>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {state.isLoginIn ? (
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleSignin}
                            >
                                SignIn
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
