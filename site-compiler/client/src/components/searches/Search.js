// Note : Stateless Component for showing Search Object

import React from 'react';

const Search = ({ search }) => {
    return (
        <div className="search clearfix">
            <ul>
                <li><strong>Keyword :</strong> {search.keyword}</li>
                <li><strong>Searched :</strong> {search.created_at}</li>
            </ul>
        </div>
    );
};

export default Search;