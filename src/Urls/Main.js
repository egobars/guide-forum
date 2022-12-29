import React from "react";
import './Main.css';
import Header from "../Components/Header/Header";
import MainCentralList from "../Components/CentralLists/MainCentralList/MainCentralList";
import MainSidebar from "../Components/Sidebars/MainSidebar/MainSidebar";

class Main extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="central-list-wrapper">
                    <MainCentralList />
                    <MainSidebar />
                </div>
            </>
        )
    }
}

export default Main;
