// Note : Stateless Component for Site Object

import React from 'react';

const Site = ({ site }) => {
    return (
        <div className="site">
            <ul>
                <li><strong>Name : </strong>{site.name}</li>
                <li><strong>URL : </strong>{site.url}</li>
                <li><strong>API URL : </strong>{site.api_url}</li>
                <li><strong>Added : </strong>{site.created_at}</li>
                <li><strong>Last Searched : </strong>{/*last site_searches where site_id === site.id*/}</li>
                <li><strong>Searched : </strong>{/*site_searches where site_id === site.id*/} Times</li>
            </ul>
        </div>
    );
};

export default Site;