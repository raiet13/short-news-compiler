
// Note : Reducer for getting/setting posts -- WIP

export default function postsReducer(state = 
    { loading: false, data: [] }, action) {
    console.log('action : ', action)
    
    switch (action.type) {
    
        case 'LOADING_POSTS':
            // console.log('Loading Posts')
            return { ...state, loading: true }

        
        case 'FETCH_POSTS':
            // console.log('Fetch Posts')
            return {
                loading: false,
                // posts: action.payload
            }
        
        default:
          return state;
    }

}
