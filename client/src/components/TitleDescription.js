import React from 'react';

const TitleDescription = ({ title, description }) => {

    return (
        <div className="titledescription clearfix">

          <div className="title">
            <h3>{title}</h3>
          </div>

          <div className="description">
            <p>{description}</p>
          </div>

        </div>
    );
};

export default TitleDescription;
