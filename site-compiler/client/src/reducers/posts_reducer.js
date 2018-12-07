
// Note : Reducer for fetching posts from external API

export default function postsReducer(state = 
    { loading: false, data: [] }, action) {
    console.log('action : ', action)
    
    switch (action.type) {
    
        case 'REMOVE_POSTS':
            return {
                loading: false,
                data: []
            }
    
        case 'LOADING_POSTS':
            console.log('Loading Posts')
            return { ...state, loading: true }

        
        case 'FETCH_POSTS':
            console.log('Fetch Posts')
            return {
                loading: false,
                data: action.payload
            }
        
        default:
          return state;
    }

}
