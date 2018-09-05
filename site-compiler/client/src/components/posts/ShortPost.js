// Note : Stateless Component for Short Post Object (just so frame is being tracked)

import React from 'react'
 
const ShortPost = post => {
    return (
        <div>
            <img src={post.url_to_image} alt={post.url_to_image}></img>
            <li>Title : {post.title}</li>
            <li>Author : {post.author}</li>
            <li>Published_at : {post.published_at}</li>
        </div>
    );
};

export default ShortPost;
