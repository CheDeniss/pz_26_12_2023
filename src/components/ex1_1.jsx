import React from 'react';

const PlayInfo = ({title, genre, year}) => {
    return (
        <div>
            <h2>{title}</h2>
            <h3>Жанр: {genre}</h3>
            <p>{year}</p>
        </div>
    );
};

export default PlayInfo;
