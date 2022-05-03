import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import {VscUnmute, VscMute} from 'react-icons/vsc'

const Intro = () => {
    const [isMuted, setIsMuted] = useState(true)
    const handleMute = ()=>{
        setIsMuted(!isMuted)
    }
  return (
    <IntroContainer>
        <ReactPlayer 
            playing={true}
            loop={true}
            width='100%' 
            height='100%' 
            volume={1} 
            muted={isMuted}
            url="https://vimeo.com/509362709"
            className="videoIntro"
        />
        <div className="infoIntro">
            <h1 className="headingIntro">THE DAWN TILL DUSK SESSION</h1>
            <p className="overviewIntro">Location: Phan Rang - Viet Nam, Creator: Rufus Blackwell</p>
        </div>
        {
            isMuted?<VscMute className='btnMute' onClick={handleMute}/>:<VscUnmute className='btnMute' onClick={handleMute}/>
        }
        <div className='fadeBottom'/>
    </IntroContainer>
  )
}

const IntroContainer = styled.div`
    position: relative;
    background-color: var(--background-color);
    color: var(--color-white);
    padding-top: 56%;

    .videoIntro{
        position: absolute;
        top: 0;
        left: 0;
    }

    .infoIntro{
        position: absolute;
        top: 140px;
        left: 30px;

        .headingIntro{
            font-size: 60px;
        }

        .overviewIntro{
            max-width: 50%;
            padding-top: 16px;
            font-size: 20px;
        }

        @media screen and (max-width:800px){
            top: 120px;
            left: 25px;
            .headingIntro{
                font-size: 40px;
            }
            .overviewIntro{
                padding-top: 16px;
                font-size: 16px;
            }
        }
        @media screen and (max-width:600px){
            top: 100px;
            left: 15px;
            .headingIntro{
                font-size: 24px;
            }
            .overviewIntro{
                max-width: 100%;
                padding-top: 16px;
                font-size: 14px;
            }
        }
    }
    .btnMute{
        position: absolute;
        top: 50%;
        right: 30px;
        font-size: 30px;
        border: 1px solid var(--color-white);
        border-radius: 50%;
        cursor: pointer;
        padding: 2px;
        transition: all 0.2s linear;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
            background-color: rgba(255,255,255,0.2);
        }

        @media screen and (max-width:800px){
            font-size: 25px;
        }

        @media screen and (max-width:600px){
            font-size: 20px;
        }
    }
    .fadeBottom{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100px;
        width: 100%;
        background-image: linear-gradient( 
            180deg,
            transparent,
            rgba(15,15,15,0.6) 40%,
            rgb(17,17,17),
            rgb(17,17,17)
        );
    }
`

export default Intro
