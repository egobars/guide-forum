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
            user: 'anonymousUser',
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.register = this.register.bind(this);
    }

    getUser() {
        let url = base_url + '/user';
        axios.get(url).then(res => {
            let data = res.data;
            console.log(data);
            this.setState({
                user: data
            });
        });
    }

    async login(event, username, password) {
        event.preventDefault();
        let data = {
            username: username,
            password: password
        };

        await axios.post(base_url + '/log', data, { withCredentials: true }).then(res => {
            console.log(res);
            this.getUser();
        }).catch((error) => {
            // will be called if there was an error
            console.error(error);
        });
    }

    logout() {

    }

    register() {

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
