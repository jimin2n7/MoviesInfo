import React from 'react'
import styled from 'styled-components'
import {SiTinder, SiGhostery, SiNetflix} from 'react-icons/si'
import {MdRecommend, MdTheaterComedy} from 'react-icons/md'
import {GiSwordsEmblem, GiLovers, GiBookCover} from 'react-icons/gi'
import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <MenuPane>
        <MenuItem name="Netflix" Icon={SiNetflix} to='netflix'/>
        <MenuItem name="Trending" Icon={SiTinder} to='trendingMovies'/>
        <MenuItem name="Top rated" Icon={MdRecommend} to='topRatedMovies'/>
        <MenuItem name="Action movies" Icon={GiSwordsEmblem} to='actionMovies'/>
        <MenuItem name="Comedy" Icon={MdTheaterComedy} to='comedyMovies'/>
        <MenuItem name="Horror movies" Icon={SiGhostery} to='romanceMovies'/>
        <MenuItem name="Romance movies" Icon={GiLovers} to='horrorMovies'/>
        <MenuItem name="Documentaries" Icon={GiBookCover} to='documentMovies'/>
    </MenuPane>
  )
}

const MenuPane = styled.ul`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0,0,0,0.2);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
    width: 40px;
    z-index: 50;
    transition: all 0.2s linear;
    li{
        display: inline-flex;
        align-items: center;
        width: 200px;
        padding: 5px;
        transition: all 0.3s ease;
        color: var(--color-white);
        cursor: pointer;
        svg{
            font-size: 30px;
        }
        span{
            margin-left: 5px;
            font-size: 20px;
        }
        &:hover{
            color: #E50914;
            background-color: rgba(0,0,0,0.7);
        }
    }
    &:hover{
        width: 200px;
        background-color: rgba(0,0,0,0.6);
    }
`

export default Menu