import React from "react";
import './LoginPanel.css';
import '../UserPanel.css';

class LoginPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            login: event.target.form[0].value,
            password: event.target.form[1].value
        });
    }

    handleSubmit(event) {
        this.props.login(event, this.state.login, this.state.password);
    }

    render() {
        return (
            <div className='user-panel'>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <h2>Войти:</h2>
                    <span>Логин:</span>
                    <input name='username' type='text' />
                    <span>Пароль:</span>
                    <input name='password' type='password' />
                    <button>Войти</button>
                </form>
            </div>
        )
    }
}

export default LoginPanel;
