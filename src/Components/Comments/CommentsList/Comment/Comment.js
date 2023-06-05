import React from "react";
import './Comment.css';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <div className="comment-user-date-panel">
                    <span>{this.props.author}</span>
                    <span>{this.props.created}</span>
                </div>
                <hr />
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default Comment;