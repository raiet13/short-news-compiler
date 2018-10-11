// Note : Reducer for site searches -- WIP
// Need to...
    // Create new SiteSearches
    // Retrieve SiteSearches
    // Retrieve a specific site's search number (searched X times)
    // Retrieve the last time a specific site was searched (last search was X date/time)

export default function siteSearchesReducer(state = [], action) {
    console.log('action : ', action)
    
    switch (action.type) {
    
        default:
          return state;
    }

}
