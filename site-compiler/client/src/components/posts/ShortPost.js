// Note : Stateless Component for Short Post Object (just so frame is being tracked)

import React from 'react';
import '../../css/ShortPost.css';

const ShortPost = ({ post }) => {
    return (
        <div className="shortPost clearfix">
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