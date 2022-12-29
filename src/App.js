import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Urls/Main";
import Guide from "./Urls/Guides/Guide";

class App extends React.Component {
    getContent() {
        return (
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/guides/*' element={<Guide />} />
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
