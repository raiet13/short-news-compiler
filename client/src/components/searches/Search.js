// Note : Stateless Component for showing Search Object
// Note : ***WIP -- should display these in a more digestible format

import React from 'react';

const Search = ({ search }) => {
  // <li><strong>Keyword :</strong> {search.search_term} || <em>Searched :</em> {search.created_at} || <em>Sites :</em> The Washington Post, Fox News</li>

    return (
        <div className="search clearfix">
            <ul>
                <li>Queried 'The Washington Post, Fox News' for '{search.search_term}' at '{search.created_at}'</li>
            </ul>
        </div>
    );
};

export default Search;
