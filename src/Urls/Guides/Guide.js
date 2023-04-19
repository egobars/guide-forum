import React from "react";
import './Guide.css';
import Header from "../../Components/Header/Header";
import BasicSidebar from "../../Components/Sidebars/BasicSidebar/BasicSidebar";
import Basement from "../../Components/Basement/Basement";
import CentralList from "../../Components/CentralList/CentralList";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {base_url} from "../../constants";
import axios from "axios";

class Guide extends React.Component {
    guide = '';

    constructor(props) {
        super(props);

        this.state = {
            id: '-1',
            loaded_guide: false
        };
    }

    genGuide() {
        if (this.state.id === '-1' || !this.state.loaded_guide) {
            return (
                <span>...</span>
            )
        }
        const markdown = this.guide;
        return (
            <div className='central-list'>
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </div>
        )
    }

    loadGuide() {
        let url = base_url + '/Guide/?id=' + this.state.id;
        console.log(url);
        axios.get(url).then(res => {
            this.guide = res.data.text;
            this.setState({loaded_guide: true})
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.id !== this.state.id) {
            this.loadGuide();
        }
    }

    componentDidMount() {
        let path = window.location.pathname;
        for (let i = path.length - 1; i > -1; --i) {
            if (path[i] === '/') {
                this.setState({id: path.slice(i + 1, path.length)});
                break;
            }
        }
    }

    render() {
        return (
            <>
                <Header />
                <div className="central-list-wrapper">
                    <CentralList>
                        {this.genGuide()}
                    </CentralList>
                    <BasicSidebar />
                </div>
                <Basement />
            </>
        )
    }
}

export default Guide;
