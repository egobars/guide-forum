import React from "react";
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='logo-text'>
                    <a href="/">Guide forum</a>
                </div>
                <div className='header-user-panel'>
                    <span>{this.props.user}</span>
                </div>
            </div>
        )
    }
}

export default Header;
