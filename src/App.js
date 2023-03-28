import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Urls/Main";
import Guide from "./Urls/Guides/Guide";
import Add from "./Urls/Add/Add";

class App extends React.Component {
    getContent() {
        return (
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/guides/*' element={<Guide />} />
                <Route path='/add' element={<Add />} />
            </Routes>
        )
    }

    render() {
        return (
            <BrowserRouter>
                {this.getContent()}
            </BrowserRouter>
        )
    }
}

export default App;
