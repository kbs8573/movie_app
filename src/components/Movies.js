import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


RenderMovie.propTypes = {
    title : PropTypes.string.isRequired
}



function RenderMovie({ title, url, rating, summary, genres, year }){
    return (
        <Link to={{
            pathname : "/movieDetail",
            state : {
                title,
                url,
                rating,
                summary,
                genres,
                year
            }
        }} >
            <div className="movie">
                <img src={url} alt={title} title={title}></img>
                <a className="title">{ title }</a>
                <a className="year">{year}</a>
                <p>{summary.slice(0,140)}...</p>
                <ul className="genres">
                    {genres.map((genre, itemNo) => <li key={itemNo}>{genre}</li> )}
                </ul>
            </div>
        </Link>
    );
}

export default RenderMovie;