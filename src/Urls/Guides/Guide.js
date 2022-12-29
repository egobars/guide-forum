import React from "react";
import './Guide.css';
import Header from "../../Components/Header/Header";
import GuideCentralList from "../../Components/CentralLists/GuideCentralList/GuideCentralList";
import GuideSidebar from "../../Components/Sidebars/GuideSidebar/GuideSidebar";

class Guide extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="central-list-wrapper">
                    <GuideCentralList />
                    <GuideSidebar />
                </div>
            </>
        )
    }
}

export default Guide;
