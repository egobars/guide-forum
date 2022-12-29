import React from "react";
import './GuidePanel.css';
import {Navigate} from "react-router-dom";

class GuidePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false
        }
    }

    IsClicked() {
        this.setState({
            isClicked: true
        })
    }

    getContent() {
        if (this.state.isClicked) {
            return (
                <Navigate to={'/guides/' + 'abc'} />
            );
        } else {
            return (
                <div className='guide-panel' onClick={() => {this.IsClicked()}}>
                    <img src={this.props.image_src}  alt="prev" />
                    <span>{this.props.name}</span>
                </div>
            );
        }
    }

    render() {
        return (
            <>
                {this.getContent()}
            </>
        );
    }
}

export default GuidePanel;
