import React from "react";
import "./BasicSidebar.css"
import "../Sidebar.css"
import LoginPanel from "../UserPanels/LoginPanel/LoginPanel";
import RegistrationPanel from "../UserPanels/RegistrationPanel/RegistrationPanel";
import CurrentUserPanel from "../UserPanels/CurrentUserPanel/CurrentUserPanel";

class BasicSidebar extends React.Component {
    render() {
        if (this.props.user === null) {
            return (
                <div className="sidebar">
                    <LoginPanel user={this.props.user} login={this.props.login} logout={this.props.logout}
                                register={this.props.register}/>
                    <RegistrationPanel user={this.props.user} login={this.props.login} logout={this.props.logout}
                                       register={this.props.register}/>
                    <a className="add-button" href="/add">
                        <button>Добавить статью</button>
                    </a>
                </div>
            )
        } else {
            return (
                <div className="sidebar">
                    <CurrentUserPanel user={this.props.user} login={this.props.login} logout={this.props.logout}
                                      register={this.props.register}/>
                    <a className="add-button" href="/add">
                        <button>Добавить статью</button>
                    </a>
                </div>
            )
        }
    }
}

export default BasicSidebar;
