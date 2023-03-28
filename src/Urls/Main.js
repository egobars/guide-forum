import React from "react";
import './Main.css';
import Header from "../Components/Header/Header";
import MainSidebar from "../Components/Sidebars/MainSidebar/MainSidebar";
import Basement from "../Components/Basement/Basement";
import data from "../data.json";
import CentralList from "../Components/CentralList/CentralList";

class Main extends React.Component {
    genGuidePanel(name, image_src, id) {
        return (
            <div className="guide-panel-a">
                <a href={'/guides/' + id}>
                    <div className='guide-panel'>
                        <img src={image_src}  alt="prev" />
                        <span>{name}</span>
                    </div>
                </a>
            </div>
        );
    }

    genGuidesList() {
        const obj = data;
        let guides = [];
        for (let i = 0; i < 50; ++i) {
            guides.push(
                this.genGuidePanel(obj[i.toString()].name, obj[i.toString()].preview, i.toString())
            )
        }
        return guides;
    }

    render() {
        return (
            <>
                <Header />
                <div className="central-list-wrapper">
                    <CentralList>
                        <h2>Последние гайды:</h2>
                        <div className="guides-list-panel">
                            {this.genGuidesList()}
                        </div>
                    </CentralList>
                    <MainSidebar />
                </div>
                <Basement />
            </>
        )
    }
}

export default Main;
