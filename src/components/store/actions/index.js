import axios from "axios";
import * as Types from '../type'

const API_KEY = 'ca437360e9fe75b9270806820867879b';
const baseURL = 'https://api.themoviedb.org/3'

export const getNetflixOriginals = () => async dispatch =>{
    try{

        const result = await axios.get(
            `${baseURL}/discover/tv/?api_key=${API_KEY}&width_networks=213`
        )
        dispatch({type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results})

    }catch(error){

        console.log('Get Netflix Api error: ', error)

    }
}

export const getTrendingMovies = () => async dispatch =>{
    try{

        const result = await axios.get(
            `${baseURL}/trending/movie/week?api_key=${API_KEY}`
        )
        dispatch({type: Types.GET_TRENDING_MOVIES, payload: result.data.results})

    }catch(error){
        console.log('Get Trending Api error: ', error)
    }
}
export const getTopRatedMovies = () => async dispatch =>{
    try{

        const result = await axios.get(
            `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        )
        dispatch({type: Types.GET_TOPRATED_MOVIES, payload: result.data.results})

    }catch(error){
        console.log('Get Top rated Api error: ', error)
    }
}
export const getActionMovies = () => async dispatch =>{
    try{

        const result = await axios.get(
            `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        )
        dispatch({type: Types.GET_ACTION_MOVIES, payload: result.data.results})

    }catch(error){
        console.log('Get Action Api error: ', error)
    }
}
export const getComedyMovies = () => async dispatch =>{
    try{

        const result = await axios.get(
            `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        )
        dispatch({type: Types.GET_COMEDY_MOVIES, payload: result.data.results})

    }catch(error){
        console.log('Get Comedy Api error: ', error)
    }
}

export const getHorrorMovies = () => async dispatch =>{
    try{

        const result = await axios.get(
            `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        )
        dispatch({type: Types.GET_HORROR_MOVIES, payload: result.data.results})

    }catch(error){
        console.log('Get Horror Api error: ', error)
    }
}

export const getDocumentariesMovies = () => async dispatch =>{
    try{

        const result = await axios.get(
            `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`
        )
        dispatch({type: Types.GET_DOCUMENTATIES_MOVIES, payload: result.data.results})

    }catch(error){
        console.log('Get Documentaries Api error: ', error)
    }
}

export const getRomanceMovies = () => async dispatch =>{
    try{

        const result = await axios.get(
            `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        )
        dispatch({type: Types.GET_ROMANCE_MOVIES, payload: result.data.results})

    }catch(error){
        console.log('Get Romance Api error: ', error)
    }
}

export const setMovieDetail = (movie) => dispatch =>{
    dispatch({type: Types.SET_MOVIE_DETAIL, payload: movie})
}

export const getSearchMovie = (keywords) =>async dispatch =>{
    try{
        const result = await axios.get(
           `${baseURL}/search/multi?api_key=${API_KEY}&language=en-US&query=${keywords}` 
        )
        dispatch({type: Types.GET_SEARCH_MOVIES, payload: result.data.results})
    }catch(error){
        console.log('Get Search Api error: ', error)
    }
    
}