import React from 'react';

const TitleDescription = ({ title, description }) => {

    return (
        <div className="titledescription clearfix">

          <div className="title">
            <h3>{title}</h3>
          </div>

          <div className="description">
            <p><strong>Description:</strong> <em>{description}</em></p>
          </div>

        </div>
    );
};

export default TitleDescription;
