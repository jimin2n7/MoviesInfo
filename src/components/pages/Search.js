import React from 'react'
import SearchMovies from '../SearchMovies/SearchMovies'
import MovieDetail from '../MoviesDetail/MovieDetail'
import { useSelector } from 'react-redux'

function Search() {
  const {MovieDetails} = useSelector(state => state.infoMovies)
  return (
    <div>
        <SearchMovies/>
        <MovieDetail showModal={MovieDetails?true:false} movie={MovieDetails}/>
    </div>
  )
}

export default Search