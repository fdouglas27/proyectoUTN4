import React from 'react';

const NoveltyItem = (props) => {
    const { title, subtitle, image, body } = props;

    return (
        <div className="novelties">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={image} />
            <div dangerouslySetInnerHTML={{ __html: body}} />
            <hr />
        </div>    

    );
}

export default NoveltyItem;