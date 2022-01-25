import React, {useState} from 'react';

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=b3fea6810ad3a698a1779b6ad4e2d5b1&query=";

function Header(props) {
    const [searchTerm, setSearchTerm] = useState(""); 

    const getMovies = (API) => {
        fetch(API)
              .then(res => res.json())
              .then(data => {
                props.setMovies(data.results); 
              });
      }


    const handleOnSubmit = (e) => {
        e.preventDefault(); 
    
          if(searchTerm){
            getMovies(SEARCH_API + searchTerm); 
            setSearchTerm(''); 
          }
      }; 
    
      const handleOnChange = (e) => {
        setSearchTerm(e.target.value); 
      }

  return <header>
    <form onSubmit={handleOnSubmit}>
        <input 
        className="search" 
        type="search" 
        placeholder="Search..." 
        value={searchTerm}
        onChange={handleOnChange} />
    </form>
</header>
}

export default Header;


