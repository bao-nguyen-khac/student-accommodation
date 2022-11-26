import { Routes, Route } from "react-router-dom";

import { SignIn, WithAuth } from "./conponents/login";

import {Post} from './conponents/post'
import {ListEditPost, EditPost} from './conponents/post'
import { Listpost } from "./conponents/list_post";
import { AppBar } from "./conponents/appbar";
import { SignUp } from "./conponents/signup";
function App() {
    return (
        <Routes>
            <Route path="/" element={<><AppBar /><Listpost /></>} />
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
            <Route
                path="/edit_post"
                element={
                    <WithAuth>
                        <AppBar />
                        <EditPost />
                    </WithAuth>
                }
            />
            <Route
                path="/list_my_post"
                element={
                    <WithAuth>
                        <AppBar />
                        <ListEditPost />
                    </WithAuth>
                }
            />
            <Route path="/signup" element={<><AppBar/><SignUp/></>}/>
        </Routes>
    );
}

export default App;
