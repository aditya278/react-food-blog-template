import React from 'react';

import Blog from './Blog';

class Footer extends React.Component {

    state = {
        footer : {
            heading : 'Footer',
            desc : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
            poweredBy : {
                link : 'https://www.w3schools.com/w3css/default.asp',
                name : 'w3.css'
            }
        },
        blogs : {
            headhing : "BLOG POSTS",
            posts : [
                {
                    id : '1',
                    name : 'Workshop',
                    desc : 'Sed mattis nunc'
                },
                {
                    id : '2',
                    name : 'Gondol',
                    desc : 'Praes tinic sed'
                }
            ]
        },
        tags : [
            'Travel', 'New York', 'Dinner', 'Salmon', 'France', 'Drinks', 'Ideas', 'Flavors',
            'Cuisine', 'Chicken', 'Dressing', 'Fried', 'Fish', 'Duck'
        ]
    }

    render() {
        return (
            <footer className="w3-row-padding w3-padding-32">
                <div className="w3-third">
                    <h3>{this.state.footer.headhing}</h3>
                    <p>{this.state.footer.desc}</p>
                    <p>Powered by <a href={this.state.footer.poweredBy.link} target="_blank">{this.state.footer.poweredBy.name}</a></p>
                </div>
            
                <div className="w3-third">
                    <h3>{this.state.blogs.headhing}</h3>
                    <ul className="w3-ul w3-hoverable">
                        {
                            this.state.blogs.posts.map(post => (
                                <li className="w3-padding-16">
                                    <Blog key={post.id} post={post} />
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="w3-third w3-serif">
                <h3>POPULAR TAGS</h3>
                <p>
                    {
                        this.state.tags.map(tag => (
                            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom w3-margin-left">{tag}</span>
                        ))
                    }
                </p>
                </div>
            </footer>

        )
    }
}

export default Footer;