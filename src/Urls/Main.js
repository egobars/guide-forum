import React from "react";
import './Main.css';
import Header from "../Components/Header/Header";
import MainSidebar from "../Components/Sidebars/MainSidebar/MainSidebar";
import Basement from "../Components/Basement/Basement";
import CentralList from "../Components/CentralList/CentralList";
import axios from "axios";
import {base_url} from "../constants";

class Main extends React.Component {
    guides = [];

    constructor(props) {
        super(props);

        this.state = {
            loaded_guides: false
        };
    }

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
        if (this.state.loaded_guides) {
            const data = this.guides;
            let guides = [];
            for (let i = 0; i < Math.min(50, data.length); ++i) {
                guides.push(
                    this.genGuidePanel(data[i].title, data[i].preview[0].image, data[i].id.toString())
                )
            }
            return guides;
        } else {
            return (
                <span>...</span>
            );
        }
    }

    loadGuides() {
        let url = base_url + '/Guides';
        const query_params = new URLSearchParams(window.location.search);
        if (query_params.get('theme') != null) {
            url = base_url + '/GuidesTheme?theme=' + query_params.get('theme');
        }
        axios.get(url).then(res => {
            this.guides = [];
            let data = res.data;
            for (let i = 0; i < data.length; ++i) {
                this.guides.push({
                    id: data[i].id,
                    title: data[i].title,
                    preview: data[i].preview
                });
            }
            this.setState({
                loaded_guides: true
            });
        });
    }

    componentDidMount() {
        this.loadGuides();
    }

    render() {
        return (
            <>
                <Header user={this.props.user} />
                <div className="central-list-wrapper">
                    <CentralList>
                        <h2>Последние гайды:</h2>
                        <div className="guides-list-panel">
                            {this.genGuidesList()}
                        </div>
                    </CentralList>
                    <MainSidebar user={this.props.user} login={this.props.login} logout={this.props.logout} register={this.props.register} />
                </div>
                <Basement />
            </>
        )
    }
}

export default Main;
