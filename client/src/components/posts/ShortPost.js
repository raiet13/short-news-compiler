// Note : Stateless Component for Short Post Object (just so frame is being tracked)

import React from 'react';
import '../../css/ShortPost.css';

const ShortPost = ({ post }) => {
    
    // Note : Just a little presentation updating 
    if (post.author === '') { post.author = 'No Author Found'; }
    // if (post.published_at === '') { post.published_at = 'Publish Date Not Found'; }
    post.published_at = 'Publish Date Not Retrieved Properly yet -- WIP';

    return (
        <div className="shortPost clearfix" onClick={() => (console.log(post.id))}>
            <ul>
                <img src={post.url_to_image} alt={post.url_to_image}></img>
                <li><strong>Title :</strong> {post.title}</li>
                <li><strong>Author :</strong> {post.author}</li>
                <li><strong>Published_at :</strong> {post.published_at}</li>
            </ul>
        </div>
    );
};

export default ShortPost;