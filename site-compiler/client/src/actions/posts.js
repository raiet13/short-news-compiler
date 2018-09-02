// Note : Actions for the Post Object (just so frame is being tracked)

export const addPost = post => {
  return {
    type: 'ADD_POST',
    post
  };
};
