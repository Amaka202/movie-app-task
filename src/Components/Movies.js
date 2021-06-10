import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import SearchBar from "material-ui-search-bar";
import CircularProgress from '@material-ui/core/CircularProgress';

const apiKey = process.env.REACT_APP_API_KEY;


function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchWord, setSearchWord] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
        setLoading(true)
          fetch(`http://www.omdbapi.com/?s=${searchWord}&page=5&type=movie&apikey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
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
                Type a movie
            </section>
            <section>
                <SearchBar
                value={searchWord}
                onChange={(searchWord) => handleChange(searchWord)}
                onCancelSearch={() => cancelSearch()}
                />
            </section>
            <section>
                <p></p>
                {loading && <CircularProgress />}
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
