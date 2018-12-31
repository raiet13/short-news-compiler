// Note : Reducer for searches -- WIP
// Need to...
    // Create new Searches and save to database
    // Retrieve Searches from database

export default function searchesReducer(state = [], action) {
    console.log('searches reducer action : ', action)
    
    switch (action.type) {
    
        default:
          return state;
    }

}
