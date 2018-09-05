// Note : Stateless Component for Short Post Object (just so frame is being tracked)

import React from 'react'
 
const ShortPost = props => {
    return (
        <div>
            <img src={props.url_to_image} alt={props.url_to_image}></img>
            <li>Title : {props.title}</li>
            <li>Author : {props.author}</li>
            <li>Published_at : {props.published_at}</li>
        </div>
    );
};

export default ShortPost;
