import React from "react";
import "./GuideSidebar.css"
import "../Sidebar.css"
import LoginPanel from "../UserPanels/LoginPanel/LoginPanel";

class GuideSidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <LoginPanel />
            </div>
        )
    }
}

export default GuideSidebar;
