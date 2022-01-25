import React, {useState} from 'react'; 
import AddFavorites from './AddFavorites';

const IMG_API = "https://image.tmdb.org/t/p/w1280"; 

const setVoteClass = (vote) => {
    if(vote >= 8){
        return 'green';
    } else if (vote >= 6){
        return 'orange';
    } else {
        return 'red';
    }
}

function Movie({title, poster_path, overview, vote_average}) {
    return (
        <div className="movie">
            <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt={title} />
            <div className='movie-info'>
                <h3>{title}</h3>
                <span className={
                    `tag ${setVoteClass(vote_average)}`
                    }>
                    {vote_average}
                </span>
            </div>

            <div className="movie-over">
                <AddFavorites title={title} poster_path={poster_path} overview={overview} vote_average={vote_average}/>
                <h2>{title}</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

// const Movie = ({title, poster_path, overview, vote_average}) => (
//     <div className="movie">
//         <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt={title} />
//         <div className='movie-info'>
//             <h3>{title}</h3>
//             <span className={
//                 `tag ${setVoteClass(vote_average)}`
//                 }>
//                 {vote_average}
//             </span>
//         </div>

//         <div className="movie-over">
//             <AddFavorites clickHandler={word => setWord(word)}/>
//             <h2>{title}</h2>
//             <p>{overview}</p>
//         </div>
//     </div>
// ); 

export default Movie; 