import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import SmoothHorizontalScrolling from '../../utils'
import useViewport from '../hooks/useViewport'
import { useDispatch} from 'react-redux'
import { setMovieDetail } from '../store/actions'

const MoviesRow = (props) => {
  const {movies, title, isNetflix, idSection} = props
  const sliderRef =useRef();
  const movieRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(0);
  const [windowWidth] = useViewport()

  const dispatch = useDispatch()
  
  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie))
  }


  const handleScrollRight = () =>{
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth
    if(sliderRef.current.scrollLeft < maxScrollLeft){
      SmoothHorizontalScrolling(sliderRef.current,
        250,
        movieRef.current.clientWidth *2,
        sliderRef.current.scrollLeft)
    }
  }

  const handleScrollLeft = () =>{
    if(sliderRef.current.scrollLeft > 0){
      SmoothHorizontalScrolling(sliderRef.current,
        250,
        -movieRef.current.clientWidth *2,
        sliderRef.current.scrollLeft)
    }
  }

  useEffect(()=>{
    if(isDrag){
      if(dragMove < dragDown) handleScrollRight();
      if( dragMove > dragDown) handleScrollLeft();
    }
  },[dragDown,dragMove,isDrag])

  const onDragStart = e =>{
    setIsDrag(true)
    setDragDown(e.screenX)
  }

  const onDragEnd = e =>{
    setIsDrag(false)
  }

  const onDragEnter = e =>{
    setDragMove(e.screenX)
  }

  return (
    <MoviesRowContainer draggable='false' id={idSection}>
      <h1 className='heading'>{title}</h1>
      <MovieSlider 
      ref={sliderRef} 
      draggable='true'
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      style={
        movies && movies.length > 0 
        ?{
            gridTemplateColumns: `repeat(${movies.length},
            ${
              windowWidth > 1200 ? '360px'
              : windowWidth > 992 ? '300px'
              : windowWidth > 768 ? '250px' : '200px'
            })`
        }:{}
      }
      >
        {
          movies&&movies.length>0 && movies.map((movie,index) => {
            if(movie.poster_path && movie.backdrop_path !== null){
              let imgUrl = isNetflix?
              `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
              return (
                <div key={index} 
                className="movieItem" 
                ref={movieRef} 
                draggable='false' onClick={() => handleSetMovie(movie)}>
                  <img src={imgUrl} alt="" draggable='false'/>
                  <div className='movieName'>{movie.name||movie.title}</div>
                </div>
              )
            }
          })
        }
      </MovieSlider>
      <div className={`btnLeft ${isNetflix && 'isNetflix'}` } onClick={handleScrollLeft}><FiChevronLeft/></div>
      <div className={`btnRight ${isNetflix && 'isNetflix'} `} onClick={handleScrollRight}><FiChevronRight/></div>
    </MoviesRowContainer>
  )
}

export default MoviesRow

const MoviesRowContainer = styled.div`
  background-color: var(--background-color);
  color: var(--color-white);
  padding: 20px;
  position: relative;
  width: 100%;
  height: 100%;

  .heading{
    font-size: 18px;
    user-select: none;
  }

  .btnLeft{
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 30;
    font-size: 40px;
    transform-origin: center;
    transform: translateY(-50%);
    background-color: rgba(0,0,0,0.5);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover{
      font-size: 50px;
      background-color: rgba(0,0,0,0.9);
    }
    &.isNetflix{
      width: 50px;
      height: 50px;
    }
  }

  .btnRight{
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 30;
    font-size: 40px;
    transform-origin: center;
    transform: translateY(-50%);
    background-color: rgba(0,0,0,0.5);
    border-radius: 4px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in;
    cursor: pointer;
    &:hover{
      font-size: 50px;
      background-color: rgba(0,0,0,0.9);
    }
    &.isNetflix{
      width: 50px;
      height: 50px;
    }
  }
`

const MovieSlider = styled.div`
  position: relative;
  display: grid;
  gap:6px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  scroll-behavior: smooth;
  &:hover .movieItem{
    opacity: 0.5;
  }

  .movieItem{
    transform: scale(1);
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 500px;
    transition: all 0.2s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;
    &:hover{
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
      cursor: pointer;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .movieName{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 4px;
      text-align: center;
      font-size: 14px;
      background-color: rgba(0,0,0,0.65);
    }
  }
`
