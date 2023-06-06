import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Urls/Main";
import Guide from "./Urls/Guides/Guide";
import Add from "./Urls/Add/Add";
import {base_url} from "./constants";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.register = this.register.bind(this);
    }

    getUser() {
        this.setState({'user': localStorage.getItem('user')})
    }

    async login(event, username, password) {
        event.preventDefault();

        const config = {
            url: base_url + '/log',
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            data: {
                'email': username,
                'password': password
            },
        }

        await axios(config).then(res => {
            localStorage.setItem('user', username);
            this.getUser();
        }).catch((error) => {
            console.error(error);
        });
    }

    logout() {
        localStorage.removeItem('user');
        this.getUser();
    }

    async register(event, username, email, password) {
        event.preventDefault();

        const config = {
            url: base_url + '/reg',
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            data: {
                'username': username,
                'email': email,
                'password': password
            },
        }

        await axios(config).then(res => {
            localStorage.setItem('user', res.body.email);
            this.getUser();
        }).catch((error) => {
            console.error(error);
        });
    }

    getContent() {
        return (
            <Routes>
                <Route path='/' element={<Main user={this.state.user} login={this.login} logout={this.logout} register={this.register} />} />
                <Route path='/guides/*' element={<Guide user={this.state.user} login={this.login} logout={this.logout} register={this.register} />} />
                <Route path='/add' element={<Add user={this.state.user} login={this.login} logout={this.logout} register={this.register} />} />
            </Routes>
        )
    }

    componentDidMount() {
        this.getUser();
    }

    render() {
        return (
            <BrowserRouter>
                {this.getContent()}
            </BrowserRouter>
        )
    }
}

export default App;
