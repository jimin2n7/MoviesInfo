import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {BsArrowUpCircle} from 'react-icons/bs'
import MoviesRow from './MoviesRow'
import styled from 'styled-components'
import {getNetflixOriginals, 
  getTrendingMovies, 
  getTopRatedMovies, 
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getRomanceMovies,
  getDocumentariesMovies} from '../store/actions'
import { animateScroll as scroll } from 'react-scroll/modules';
import useScrollY from '../hooks/useScrollY'
   
const ScrolltoTop = () =>{
  scroll.scrollToTop()
}

const Contents = () => {
  const dispatch = useDispatch();
  const {NetflixOriginals, TrendingMovies, TopRatedMovies, ActionMovies, ComedyMovies, HorrorMovies, DocumentariesMovies, RomanceMovies} = useSelector(state => state.infoMovies)
  const [scrollY] = useScrollY()

  useEffect(()=>{
    dispatch(getNetflixOriginals())
    dispatch(getTrendingMovies())
    dispatch(getTopRatedMovies())
    dispatch(getActionMovies())
    dispatch(getComedyMovies())
    dispatch(getHorrorMovies())
    dispatch(getDocumentariesMovies())
    dispatch(getRomanceMovies())
  },[dispatch])

  return (

    <div>
        <MoviesRow movies={NetflixOriginals} title = "Netflix Originals" isNetflix = {true} idSection = 'netflix'/>
        <MoviesRow movies={TrendingMovies} title = "Trending Movies" idSection='trendingMovies'/>
        <MoviesRow movies={TopRatedMovies} title = "Top rated Movies" idSection='topRatedMovies'/>
        <MoviesRow movies={ActionMovies} title = "Action Movies" idSection='actionMovies'/>
        <MoviesRow movies={ComedyMovies} title = "Comedy Movies" idSection='comedyMovies'/>
        <MoviesRow movies={RomanceMovies} title = "Romance Movies" idSection='romanceMovies'/>
        <MoviesRow movies={HorrorMovies} title = "Horror Movies" idSection='horrorMovies'/>
        <MoviesRow movies={DocumentariesMovies} title = "Documentaries" idSection='documentMovies'/>
        <GotoTop onClick={()=>ScrolltoTop()}
          style={
            {visibility: `${scrollY > 600 ? 'visible':'hidden'}`}
          }
        >
          <BsArrowUpCircle/>
        </GotoTop>
    </div>
  )
}

const GotoTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 10px;
  z-index: 50;
  font-size: 50px;
  cursor: pointer;
  color: var(--color-white);
  opacity: 0.5;
  transition: all 0.2s linear;
  &:hover{
    opacity: 1;
    transform: scale(1.1);
  }

  @media screen and (max-width: 600px){
      right: 10px;
      font-size: 35px;
  }
`
export default Contents