import React from "react";
import './AddComment.css';

class AddComment extends React.Component {
    render() {
        if (this.props.user == null) {
            return (
                <h2>Для оставления комментария необходимо авторизоваться.</h2>
            );
        }
        return (
            <div className="post-comment">
                <textarea className="post-comment-text" rows="3" />
                <button className="post-comment-button">Отправить</button>
            </div>
        );
    }
}

export default AddComment;