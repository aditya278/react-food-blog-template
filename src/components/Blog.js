import React, { Fragment } from 'react';

class Blog extends React.Component {
    render() {

        const { name, desc } = this.props.post;

        return (
            <Fragment>
                <img src={`https://source.unsplash.com/300x300/?${name}`} alt={name} className="w3-left w3-margin-right" style={{width:50}} />
                <span className="w3-large">{name}</span><br />
                <span>{desc}</span>
            </Fragment>
        )
    }
}

export default Blog;