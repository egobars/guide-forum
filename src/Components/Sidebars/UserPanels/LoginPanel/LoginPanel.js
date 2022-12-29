import React from "react";
import './LoginPanel.css';
import '../UserPanel.css';

class LoginPanel extends React.Component {
    render() {
        return (
            <div className='user-panel'>
                <form>
                    <h2>Войти:</h2>
                    <span>Логин:</span>
                    <input type="text" />
                    <span>Пароль:</span>
                    <input type="text" />
                    <button>Войти</button>
                </form>
            </div>
        )
    }
}

export default LoginPanel;
