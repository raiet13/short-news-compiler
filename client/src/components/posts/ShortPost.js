// Note : Stateless Component for Short Post Object (just so frame is being tracked)
// Note : *** WIP -- cut char limit for title (tried using "textSnippet" class, need to confirm during testing -- https://stackoverflow.com/questions/15124838/how-to-keep-div-on-one-line-and-append-ellipses/15124873#15124873) and have author be the site name if one is not found

import React from 'react';
import '../../css/ShortPost.css';

const ShortPost = ({ post }) => {

    // Note : Just a little presentation updating
    if (post.author === '') { post.author = 'No Author Found'; }
    if (post.published_at === '') { post.published_at = 'Publish Date Not Found'; }

    return (
        <div className="shortPost clearfix" onClick={() => (console.log(post.id))}>
            <ul>
                <img src={post.url_to_image} alt={post.url_to_image}></img>
                <li className="textSnippet"><strong>Title :</strong> {post.title}</li>
                <li><strong>Author :</strong> {post.author}</li>
                <li><strong>Published_at :</strong> {post.published_at}</li>
            </ul>
        </div>
    );
};

export default ShortPost;
