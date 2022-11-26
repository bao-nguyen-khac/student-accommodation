import { Routes, Route } from "react-router-dom";

import { SignIn, WithAuth } from "./conponents/login";

import {Search} from "./conponents/search"
import {Post} from './conponents/post'
import {EditPost} from './conponents/post'
import { Listpost } from "./conponents/list_post";
import { AppBar } from "./conponents/appbar";
function App() {
    return (
        <Routes>
            <Route path="/" element={<><AppBar /><Search /></>} />
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
            <Route path="/listpost" element={<><AppBar /><Listpost /></>} />
        </Routes>
    );
}

export default App;
