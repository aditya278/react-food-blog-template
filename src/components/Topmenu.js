import React, { Fragment } from 'react';

import Sidebar from './Sidebar';

class Topmenu extends React.Component {
    constructor() {
        super();
        this.state = {
            display : 'none'
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        if(this.state.display === 'none')
            this.setState({display : 'block'});
        else if(this.state.display === 'block')
            this.setState({display : 'none'});
    }

    render() {
        return (
            <Fragment>
                <Sidebar display = {this.state.display} onClick = {this.toggleSidebar} />
                <div className="w3-top">
                    <div className="w3-white w3-xlarge" style={{ maxWidth:1200, margin:'auto'}}>
                        <div className="w3-button w3-padding-16 w3-left" onClick={this.toggleSidebar}>&#9776;</div>
                        <div className="w3-right w3-padding-16">Mail</div>
                        <div className="w3-center w3-padding-16">My Food</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Topmenu;