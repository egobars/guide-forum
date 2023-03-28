import React from "react";
import './CentralList.css';

class CentralList extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className='central-list'>
                {children}
            </div>
        )
    }
}

export default CentralList;
