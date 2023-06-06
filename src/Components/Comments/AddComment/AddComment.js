import React from "react";
import './AddComment.css';
import {base_url} from "../../../constants";
import axios from "axios";

class AddComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'textarea_value': ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const config = {
            url: base_url + '/comment/create',
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            data: {
                'text': this.state.textarea_value,
                'id': this.props.id
            }
        }

        await axios(config).then(res => {
            console.log(res);
        }).catch((error) => {
            console.error(error);
        });

        this.props.load_comments();
        this.setState({ textarea_value: '' });
    }

    render() {
        if (this.props.user == null) {
            return (
                <h2>Для оставления комментария необходимо авторизоваться.</h2>
            );
        }
        return (
            <form className="post-comment" onSubmit={this.handleSubmit}>
                <textarea name="comment-text" className="post-comment-text" rows="3" value={this.state.textarea_value} onChange={(event) => this.setState({textarea_value: event.target.value})} />
                <button type="submit" className="post-comment-button">Отправить</button>
            </form>
        );
    }
}

export default AddComment;