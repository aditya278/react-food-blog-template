import React from 'react';

class Sidebar extends React.Component {

    render() {

        const {display, onClick} = this.props;

        return (
            <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style={{ display : display, zIndex : 2, width:'40%', minWidth: 300}} id="mySidebar">
                <a href="#close" onClick={onClick} className="w3-bar-item w3-button">Close Menu</a>
                <a href="#food" onClick={onClick} className="w3-bar-item w3-button">Food</a>
                <a href="#about" onClick={onClick} className="w3-bar-item w3-button">About</a>
            </nav>
        )
    }
}

export default Sidebar;