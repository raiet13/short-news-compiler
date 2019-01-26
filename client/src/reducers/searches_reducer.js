// Note : Reducer for searches -- WIP
// Need to...
    // Create new Searches and save to database
    // Retrieve Searches from database

export default function searchesReducer(state = { loading: false, searches: [] }, action) {
    // console.log('searches reducer action : ', action)
    // debugger;
    switch (action.type) {

      case 'LOADING_SEARCHES':
        // console.log('loading searches reducer action');
        return { ...state, loading: true }

      case 'FETCH_SEARCHES':
        // console.log('fetch searches reducer action');
        // debugger;
        return {
            loading: false,
            searches: action.payload
        }

      case 'ADD_SEARCH':
        console.log('add new search to database');
        return { ...state, searches: [...state.searches, action.payload] }

      default:
        return state;
    }

}
