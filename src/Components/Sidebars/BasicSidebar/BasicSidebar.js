import React from "react";
import "./BasicSidebar.css"
import "../Sidebar.css"
import LoginPanel from "../UserPanels/LoginPanel/LoginPanel";

class BasicSidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <LoginPanel />
                <a href="/add"><button>Добавить статью</button></a>
            </div>
        )
    }
}

export default BasicSidebar;
