import React from "react";
import './CommentsList.css';
import axios from "axios";
import Comment from "./Comment/Comment";
import {base_url} from "../../../constants";

class CommentsList extends React.Component {
    genCommentsList() {
        if (this.props.loaded_comments) {
            let comments = []
            for (let i = 0; i < this.props.comments_list.length; ++i) {
                comments.push(
                    <Comment author={this.props.comments_list[i].author} created={this.props.comments_list[i].created} text={this.props.comments_list[i].text}/>
                );
            }
            return comments;
        } else {
            return (
                <span>...</span>
            );
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.loaded_comments !== this.props.loaded_comments) {
            this.genCommentsList();
        }
    }

    componentDidMount() {
        this.genCommentsList();
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