import React from 'react'
import { useDispatch } from 'react-redux'
import styled,{keyframes} from 'styled-components'
import { setMovieDetail } from '../store/actions'
import moment from 'moment'

const MovieDetail = (props) => {
    const dispatch = useDispatch()
    const {movie, showModal} = props
    const handleCloseModal = () =>{
        dispatch(setMovieDetail(null))
    }
  return (
      
    <MovieDetailModal>
        <div className={`backdrop ${showModal?'showBackdrop':'hideBackdrop'}`}
            onClick = {handleCloseModal}
        ></div>
        <div className={`modal ${showModal?'showModal':'hideModal'}`}
            style={movie?{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path ||movie.poster_path })`,
                backgroundSize: 'cover'
            }:{}}
        >
            <div className="container">
                <div className="movieInfo">
                    <div className="movieInfo__title">{movie&& (movie.title || movie.name)}</div>
                    <p className='movieInfo__score'>
                        <span className="movieInfo__score-rating">Rating: {movie&& movie.vote_average *10}</span>
                        <span className="movieInfo__score-popularity">Popularity: {movie&& movie.popularity}</span>
                    </p>
                    <p className="movieInfo__releaseDate">
                        Release date: {movie && moment(movie.release_date).format('DD/MM/YYYY') }
                    </p>
                    <p className="movieInfo__runtime">
                        Runtime: {movie && (movie.runtime||movie.episode_run_time)}
                    </p>
                    <p className="movieInfo__overview">
                        {movie&&movie.overview}
                    </p>
                </div>
            </div>
        </div>
    </MovieDetailModal>
  )
}

export default MovieDetail

const fadeIn = keyframes`
    0% {
        background: rgba(0,0,0,0);
    }
    100% {
        background: rgba(0,0,0,0.6);
    }
`

const MovieDetailModal = styled.div`
    .backdrop{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 50;
        animation:  ${fadeIn} 1s ease-in forwards;
    }

    .showBackdrop{
        display: block;
    }
    
    .hideBackdrop{
        display: none;
    }

    .modal{
        position: fixed;
        height: 70%;
        top: 50%;
        transform: translateY(-50%);
        z-index: 999;
        width: 100%;
        margin: 0 auto;
        color: var(--color-white);
        box-shadow: 0 15px 40px rgba(var(--color-dark),0.2);
        transition: all 0.2s linear;
        
        @media only screen and (max-width: 1184px) {
            height: 70%;
        }
        @media only screen and (max-width: 600px) {
            height: 80%;
        }
        
        .container{
            position: relative;
            width: 80%;
            height: 100%;
            background: linear-gradient(90deg, rgba(0,0,0,0.94) 60%, transparent);

            @media screen and (max-width: 1184px) {
                width: 90%;
                background: linear-gradient(90deg,
                    rgba(0,0,0,0.95) 40%,
                    rgba(0,0,0,0.73), transparent);
            }

            @media screen and (max-width: 980px) {
                width: 100%;
                background: linear-gradient(90deg,
                    rgba(0,0,0,0.95) 50%,
                    transparent);
            }

            @media screen and (max-width: 600px) {
                width: 100%;
                background: linear-gradient(90deg,
                    rgba(0,0,0,0.88) 60%, transparent);
            }
        }
        .movieInfo{
            width: 70%;
            height: 100%;
            padding-left: 24px;
            color: #fff;
            font-size: 20px;
            padding-top: 30px;

            @media screen and (max-width: 600px) {
                font-size: 16px;
            }

            .movieInfo__title{
                margin-top: 30px;
                font-size: 40px;
                font-weight: 500;
                color: #fff;
                
                @media screen and (max-width: 600px) {
                    font-size: 32px;
                }
            }

            .movieInfo__score{
                margin-top: 20px;
                .movieInfo__score-rating{
                    color: #5cdf5c;
                }

                .movieInfo__score-popularity{
                    color: yellow;
                    margin-left: 12px;
                }

                @media screen and (max-width: 600px) {
                    font-size: 16px;
                }
            }

            .movieInfo__releaseDate{
                margin-top: 12px;
            }

            .movieInfo__runtime{
                margin-top: 12px;
            }

            .movieInfo__overview{
                margin-top: 20px;
                color: rgba(255, 255, 255, 0.6);
                @media screen and (max-width: 1184px) {
                    font-size: 16px;
                }
                @media screen and (max-width: 600px) {
                    font-size: 14px;
                }
            }
        }

    }

    .showModal{
        top: 50%;
        transform: translateY(-50%);
        opacity: 1;
        transition: all 0.3s ease-in-out;
    }

    .hideModal{
        top: 0;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
    }
`