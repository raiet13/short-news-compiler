// Note : Stateless Component for showing Search Object
// Note : Figuring out how to handle "search sites" still

import React from 'react';

const Search = ({ search }) => {
    return (
        <div className="search clearfix">
            <ul>
                <li><strong>Keyword :</strong> {search.keyword}</li>
                <li><strong>Sites Searched :</strong> {search.sites}</li>
                <li><strong>Searched At :</strong> {search.created_at}</li>
            </ul>
        </div>
    );
};

export default Search;