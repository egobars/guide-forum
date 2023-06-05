import React from "react";
import './RegistrationPanel.css';
import '../UserPanel.css';

class RegistrationPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            login: event.target.form[0].value,
            email: event.target.form[1].value,
            password: event.target.form[2].value
        });
    }

    handleSubmit(event) {
        this.props.register(event, this.state.login, this.state.email, this.state.password);
    }

    render() {
        return (
            <div className='user-panel'>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <h2>Регистрация:</h2>
                    <span>Логин:</span>
                    <input name='username' type='text' />
                    <span>E-mail:</span>
                    <input name='email' type='text' />
                    <span>Пароль:</span>
                    <input name='password' type='password' />
                    <button>Зарегистрироваться</button>
                </form>
            </div>
        )
    }
}

export default RegistrationPanel;
