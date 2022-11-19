import { Routes, Route } from "react-router-dom";

import { SignIn, WithAuth } from "./conponents/login";
import {Search} from "./conponents/search"
import {Post} from './conponents/post'
function App() {
    return (
        <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/create_post" element={<WithAuth><Post /></WithAuth>} />
        </Routes>
    );
}

export default App;
