
// Note : Reducer for fetching posts from external API
// Update this to deal with various posts/sites -- https://learn.co/tracks/full-stack-web-development-v6/redux/redux-library/combine-reducers-codealong

export default function postsReducer(state =
    { loading: false, headlines: [] }, action) {
    // console.log('posts reducer action : ', action)

    switch (action.type) {

        case 'REMOVE_POSTS':
          console.log('Remove Existing Posts')
            return {
                loading: false,
                headlines: []
            }

        case 'LOADING_POSTS':
            console.log('Loading Posts')
            return { ...state, loading: true }

        case 'FETCH_POSTS':
            console.log('Fetch Posts')
            return {
                loading: false,
                headlines: action.articles
            }

        default:
          return state;
    }

}
