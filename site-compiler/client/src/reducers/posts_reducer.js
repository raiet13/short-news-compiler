
// Note : Reducer for fetching posts from external API

export default function postsReducer(state = 
    { loading: false, data: [], headlines: [] }, action) {
    console.log('posts reducer action : ', action)
    
    switch (action.type) {
    
        case 'REMOVE_POSTS':
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
                headlines: action.payload
            }
        
        default:
          return state;
    }

}
