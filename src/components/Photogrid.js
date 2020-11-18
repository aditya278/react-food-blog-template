import React, { Fragment } from 'react';

import PhotoItem from './PhotoItem';

class Photogrid extends React.Component {

    state = {
        photoLine1 : [
            {
                subject : "Sandwich",
                heading : "The Perfect Sandwich, A Real NYC Classic",
                paragraph : "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
            },
            {
                subject : "Steak",
                heading : "Let Me Tell You About This Steak",
                paragraph : "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
            },
            {
                subject : "Cherries",
                heading : "Cherries, interrupted",
                paragraph : "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
            },
            {
                subject : "Pasta",
                heading : "Once Again, Robust Wine and Vegetable Pasta",
                paragraph : "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
            }
        ],
        photoLine2 : [
            {
                subject : "Popsicle",
                heading : "All I Need Is a Popsicle",
                paragraph : "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
            },
            {
                subject : "Salmon",
                heading : "Salmon For Your Skin",
                paragraph : "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
            },
            {
                subject : "Sandwich",
                heading : "The Perfect Sandwich, A Real NYC Classic",
                paragraph : "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
            },
            {
                subject : "Croissant",
                heading : "Le French",
                paragraph : "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
            }
        ]
    }

    render() {
        return (
            <Fragment>
                <div className="w3-row-padding w3-padding-16 w3-center" id="food">
                    {
                        this.state.photoLine1.map(photo => (
                            <PhotoItem photo = {photo} />
                        ))
                    }
                </div>
                <div className="w3-row-padding w3-padding-16 w3-center">
                    {
                        this.state.photoLine2.map(photo => (
                            <PhotoItem photo = {photo} />
                        ))
                    }
                </div>
            </Fragment>
        )
    }
}

export default Photogrid;