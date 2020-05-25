import React from 'react';
import './Card.css';

const Card = (props) => {

    const limitMovieTitle = (title,limit = 200) => {
        const newTitle = [];
        if(title.length > limit){
            title.split(' ').reduce((acc,el)=>{
                if(acc + el.length <= limit){
                    newTitle.push(el);
                }
                return acc + el.length;
            },0);
            return `${newTitle.join(' ')}...`
        }
        return title;
    }


    const moviesTitle = props.movies.map(movie => {
        return(
        <div  key= {movie.id} className={'card'}>
            <div className={'card__img'}>
              <img alt={'movie-poster'} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
            </div>
            <div className={'description'}>
                <div>
                    <h2 style={{color:'#747474', fontSize: '30px',marginBottom:'20px'}}>{movie.title}</h2>
                    <h4 style={{color:'#B4B4BA'}}>{limitMovieTitle((movie.overview))}</h4>
                </div>
                <div className={'description__detail'}>
                    <h5 style={{marginTop:'20px'}}>{`Release Date: ${movie.release_date}`}</h5>
                    <div style={{marginTop:'20px'}}>
                        <button className={'detail-btn'}>See Detail</button>
                    </div>
                    </div>
                </div>
        </div>
        );
    })
    
    if(props.loading){
        return (
            <div>Loading...</div>
        )
    } else {
    return (
        <div className={'cards'}>
            {moviesTitle}
        </div>
    )
    }
}

export default Card;