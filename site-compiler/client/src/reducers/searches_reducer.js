// Note : Reducer for searches -- WIP
// Need to...
    // Create new Searches and save to database
    // Retrieve Searches
    // Retrieve a specific Search's keyword + date completed

export default function searchesReducer(state = [], action) {
    console.log('action : ', action)
    
    switch (action.type) {
    
        default:
          return state;
    }

}
