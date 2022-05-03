import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Contents from '../Contents/Contents'
import Intro from '../Intro/Intro'
import Menu from '../Menu/Menu'
import MovieDetail from '../MoviesDetail/MovieDetail'

function Home() {
    const { MovieDetails } = useSelector(state => state.infoMovies)
    const [isShowMovieDetail, setShowMovieDetail] = useState(false)
    useEffect(()=>{
        setShowMovieDetail(MovieDetails?true:false)
    },[MovieDetails])
    
  return (
    <div>
        <Intro/>
        <Contents/>
        <Menu/>
        <MovieDetail movie = {MovieDetails} showModal ={isShowMovieDetail} />
    </div>
  )
}

export default Home