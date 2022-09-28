import React from "react";
import { Route, Routes } from 'react-router-dom'
import Form from "../form/form.js";
import Main from "../index/index.js";

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/Cadastro-de-produtos/" element={<Form/>}/>
        </Routes>
    );
}

export default Routers