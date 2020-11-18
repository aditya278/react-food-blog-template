import React from 'react';

import Photogrid from './Photogrid';
import About from './About';
import Footer from './Footer';

class PageContent extends React.Component {
    render() {
        return (
            <div className="w3-main w3-content w3-padding" style={{maxWidth:1200, marginTop:100}}>
                <Photogrid />

                <div className="w3-center w3-padding-32">
                    <div className="w3-bar">
                    <a href="#prev" className="w3-bar-item w3-button w3-hover-black">&laquo;</a>
                    <a href="#1" className="w3-bar-item w3-black w3-button">1</a>
                    <a href="#2" className="w3-bar-item w3-button w3-hover-black">2</a>
                    <a href="#3" className="w3-bar-item w3-button w3-hover-black">3</a>
                    <a href="#4" className="w3-bar-item w3-button w3-hover-black">4</a>
                    <a href="#next" className="w3-bar-item w3-button w3-hover-black">&raquo;</a>
                    </div>
                </div>
                
                <hr id="about"></hr>

                <About />

                <hr />

                <Footer />
            </div>
        )
    }
}

export default PageContent;