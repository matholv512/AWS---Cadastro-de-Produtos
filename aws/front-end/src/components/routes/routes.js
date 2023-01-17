import React from "react";
import { Route, Routes } from 'react-router-dom'
import Form from "../form/form.js";
import FormEdit from "../form/formEdit.js";
import Main from "../index/index.js";

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/cadastro-de-produtos/" element={<Form/>}/>
            <Route exact path="/editar-produtos/" element={<FormEdit/>}/>
        </Routes>
    );
}

export default Routers