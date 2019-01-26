// Note : Presentational Component for showing all Post Objects (just so frame is being tracked)

import React, { Component } from 'react';
import ShortPost from './ShortPost';

class Posts extends Component {

  render() {
    const { posts } = this.props;
    const postList = posts.map(post => {
      return (
        <ShortPost
            key={post.url}
            post={post}
        />
      )
    });

    return(
      <ul>
        {postList}
      </ul>
    );
  }
};

export default Posts;
