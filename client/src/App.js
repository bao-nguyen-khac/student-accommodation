import { Routes, Route } from "react-router-dom";

import { SignIn, WithAuth } from "./conponents/login";

import {Search} from "./conponents/search"
import {Post} from './conponents/post'
import { Listpost } from "./conponents/list_post";
import { AppBar } from "./conponents/appbar";
import { SignUp } from "./conponents/signup";
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
            <Route path="/listpost" element={<><AppBar /><Listpost /></>} />
            <Route path="/signup" element={<><AppBar/><SignUp/></>}/>
        </Routes>
    );
}

export default App;
