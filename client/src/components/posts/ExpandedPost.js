// Note : Stateless Component for Expanded Post Object (just so frame is being tracked)

import React from 'react'
 
const ExpandedPost = props => {
    return (
        <div>
            <img src={props.url_to_image} alt={props.url_to_image}></img>
            <li>Title : {props.title}</li>
            <li>Author : {props.author}</li>
            <li>Description : {props.description}</li>
            <li>Published_at : {props.published_at}</li>
            <li>Url : {props.url}</li>
        </div>
    );
};

export default ExpandedPost;
