import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import SearchBar from "material-ui-search-bar";


const apiKey = process.env.REACT_APP_API_KEY;


function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchWord, setSearchWord] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setLoading(true)
          console.log(searchWord)
          fetch(`http://www.omdbapi.com/?s=${searchWord}&page=5&type=movie&apikey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.Search);
                setMovies(data.Search)
                setLoading(false)
            })
        }, 2000)
    
        return () => clearTimeout(delayDebounceFn)
      }, [searchWord])

    const handleChange = (searchWord) => {
        setSearchWord(searchWord)
    }
    const cancelSearch = () => {
        setSearchWord("");
      };


    return (
        <div>
            <section>
                <SearchBar
                value={searchWord}
                onChange={(searchWord) => handleChange(searchWord)}
                onCancelSearch={() => cancelSearch()}
                />
            </section>
            <section>
                {loading && <h3>Getting your movies...</h3>}
                {movies && movies.map((movie) => {
                    return (
                        <div className="movies-main">
                             <Movie key={movie.imdbID} movie={movie} />
                        </div>
                    );
                })}
            </section>
        </div>
    )
      
}

export default Movies;
