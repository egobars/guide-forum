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
import CommentsList from "../../Components/Comments/CommentsList/CommentsList";
import AddComment from "../../Components/Comments/AddComment/AddComment";

class Guide extends React.Component {
    guide = '';
    comments_list = []

    constructor(props) {
        super(props);

        this.state = {
            id: '-1',
            loaded_guide: false,
            loaded_comments: false
        };

        this.loadComments = this.loadComments.bind(this);
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
        axios.get(url).then(res => {
            this.guide = res.data.text;
            this.setState({loaded_guide: true})
        });
    }

    loadComments() {
        if (this.state.id !== '-1') {
            let url = base_url + '/comment/guide?id=' + this.state.id;
            axios.get(url).then(res => {
                console.log(res);
                this.comments_list = [];
                for (let i = 0; i < res.data.length; ++i) {
                    this.comments_list.push({
                        text: res.data[i].text
                    });
                }
                this.setState({
                    loaded_comments: true
                });
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.id !== this.state.id) {
            this.loadGuide();
            this.loadComments();
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
                <Header user={this.props.user} />
                <div className="central-list-wrapper">
                    <CentralList>
                        {this.genGuide()}
                        <h2>Комментарии:</h2>
                        <CommentsList id={this.state.id} comments_list={this.comments_list} loaded_comments={this.state.loaded_comments} />
                        <AddComment user={this.props.user} id={this.state.id} load_comments={this.loadComments} />
                    </CentralList>
                    <BasicSidebar user={this.props.user} login={this.props.login} logout={this.props.logout} register={this.props.register} />
                </div>
                <Basement />
            </>
        )
    }
}

export default Guide;
