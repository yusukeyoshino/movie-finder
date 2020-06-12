import React from 'react';

const movieDetail = (props) => {
    console.log(props);
    return(
        <div>{props.match.params.id}</div>
    )
}

export default movieDetail;