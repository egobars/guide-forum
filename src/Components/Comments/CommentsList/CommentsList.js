import React from "react";
import './CommentsList.css';
import axios from "axios";
import Comment from "./Comment/Comment";
import comments from "../../../comments.json"
import {base_url} from "../../../constants";

class CommentsList extends React.Component {
    comments_list = []

    constructor(props) {
        super(props);

        this.state = {
            loaded_comments: false
        };
    }

    genCommentsList() {
        if (this.state.loaded_comments) {
            let comments = []
            for (let i = 0; i < this.comments_list.length; ++i) {
                comments.push(
                    <Comment author={this.comments_list[i].author} created={this.comments_list[i].created} text={this.comments_list[i].text}/>
                );
            }
            return comments;
        } else {
            return (
                <span>...</span>
            );
        }
    }

    loadComments() {
        if (this.props.id !== '-1') {
            let url = base_url + '/comment/guide?id=' + this.props.id;
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
        if (prevProps.id !== this.props.id) {
            this.loadComments();
        }
    }

    componentDidMount() {
        this.loadComments();
    }

    render() {
        return (
            <div className="comments-list">
                {this.genCommentsList()}
            </div>
        );
    }
}

export default CommentsList;