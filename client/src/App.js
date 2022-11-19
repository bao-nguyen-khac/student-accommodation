import { Routes, Route } from "react-router-dom";

import { SignIn, WithAuth } from "./conponents/login";
import { Post } from "./conponents/post";
import { AppBar } from "./conponents/appbar";
function App() {
    return (
        <Routes>
            <Route path="/" element={<><AppBar /><p>This is the home page</p></>} />
            <Route
                path="/signin"
                element={
                    <>
                        <AppBar />
                        <SignIn />
                    </>
                }
            />
            <Route
                path="/create_post"
                element={
                    <WithAuth>
                        <AppBar />
                        <Post />
                    </WithAuth>
                }
            />
        </Routes>
    );
}

export default App;
