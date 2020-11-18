import React from 'react';

class PhotoItem extends React.Component {
    render() {

        const {subject, heading, paragraph} = this.props.photo;

        return (
            <div className="w3-quarter">
                <img src={`https://source.unsplash.com/300x400/?${subject}`} alt={subject} style={{width:'100%'}} />
                <h3>{heading}</h3>
                <p>{paragraph}</p>
            </div>
        )
    }
}

export default PhotoItem;