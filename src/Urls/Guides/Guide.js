import React from "react";
import './Guide.css';
import Header from "../../Components/Header/Header";
import BasicSidebar from "../../Components/Sidebars/BasicSidebar/BasicSidebar";
import Basement from "../../Components/Basement/Basement";
import CentralList from "../../Components/CentralList/CentralList";
import data from "../../data.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

class Guide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: -1,
        };
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

    genGuide() {
        if (this.state.id === -1) {
            return (
                <span>...</span>
            )
        }
        const obj = data;
        const markdown = obj[this.state.id.toString()].text;
        return (
            <div className='central-list'>
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </div>
        )
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
