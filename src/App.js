import React, {useEffect, useState} from 'react';


import Movie from './components/Movie'; 
import Header from './components/Header'; 
import AddFavorites from './components/AddFavorites';


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b3fea6810ad3a698a1779b6ad4e2d5b1&page=1";

// const FEATURED_API = "https://api.themoviedb.org/3/movie/550?api_key=b3fea6810ad3a698a1779b6ad4e2d5b1";
// const IMG_API = "https://image.tmdb.org/t/p/w1280"; 
// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=b3fea6810ad3a698a1779b6ad4e2d5b1&query=";


function App() {
  const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState(""); 
  const [favorites, setFavorites] = useState([]); 
  
  useEffect(() => {
    getMovies(FEATURED_API); 
  }, []); 

  const getMovies = (API) => {
    fetch(API)
          .then(res => res.json())
          .then(data => {
            setMovies(data.results); 
          });
  }

    const addFavoriteMovie = (movie) => {
      const newFavoriteList = [...favorites, movie]
      setFavorites(newFavoriteList); 
    }

    return (
      <>
        <Header setMovies={setMovies}/>

        <div className="movie-container">
          {movies.length > 0 && movies.map(movie => (
            <Movie key={movie.id} {...movie} handleFavoritesClick={addFavoriteMovie} favoriteComponent={AddFavorites}/> 
          ))}
        </div>
      </>
    ); 
}

export default App;

