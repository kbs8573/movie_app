import React from 'react'

function RenderMovie({ id, title, url }){
    return (
        <div>
            <h4>{ title }</h4>
            <img src={url}></img>
        </div>
    );
}

export default RenderMovie;