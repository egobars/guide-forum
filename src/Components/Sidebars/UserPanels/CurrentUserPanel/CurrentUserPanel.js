import React from "react";
import './CurrentUserFile.css';
import '../UserPanel.css';

class CurrentUserPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.logout(event);
    }

    render() {
        return (
            <div className='user-panel'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Текущий пользователь:</h2>
                    <span>{this.props.user}</span>
                    <button>Выйти</button>
                </form>
            </div>
        )
    }
}

export default CurrentUserPanel;
