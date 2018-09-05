// Note : Stateless Component for Short Post Object (just so frame is being tracked)

import React, { Component } from 'react';
import '../../css/ShortPost.css';

const ShortPost = ({ key, post }) => {
    return (
        <div class="shortPost clearfix" id={key}>
            <ul>
                <img src={post.url_to_image} alt={post.url_to_image}></img>
                <li>Title : {post.title}</li>
                <li>Author : {post.author}</li>
                <li>Published_at : {post.published_at}</li>
            </ul>
        </div>
    );
};

export default ShortPost;