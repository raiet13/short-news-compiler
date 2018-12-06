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
            </ul>
        </div>
    );
};

export default Site;