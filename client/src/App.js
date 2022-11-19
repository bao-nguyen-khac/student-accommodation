import { Routes, Route } from "react-router-dom";

import { SignIn, WithAuth } from "./conponents/login";
import {Post} from './conponents/post'
function App() {
    return (
        <Routes>
            <Route path="/" element={<p>This is the home page</p>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/create_post" element={<WithAuth><Post /></WithAuth>} />
        </Routes>
    );
}

export default App;
