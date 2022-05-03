import Reacts,{useState} from 'react'
import NetflixLogo from '../../assets/images/netflix_logo.png'
import useScrollY from '../hooks/useScrollY'
import {MdSearch} from 'react-icons/md'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
	const [scrollY] = useScrollY()
	const [keywords, setKeywords] = useState('')
	const navigate = useNavigate()

	const handleInputChange = (e) =>{
		let keywords = e.target.value
		setKeywords(keywords)
		if(keywords.length>0){
			navigate(`/search?keywords=${keywords.trim()}`)
		}else{
			navigate('/')
		}
	}

	const goHome = () =>{
		navigate('/')
		setKeywords('')
	}
  return (
    <Navigation style={scrollY<80?{backgroundColor:'transparent'}:{backgroundColor:'var(--background-color)'}}>
      <div className='navContainer'>
        <div to ={'/'} className='logo' onClick={goHome}>
          <img src={NetflixLogo} alt="" />
        </div>
        <div className='navSearch'>
          <MdSearch className='iconSearch'/>
          <input type="text" onChange={handleInputChange}
            placeholder='Input title, genres, people...'
			value={keywords}
          />
        </div>
      </div>
    </Navigation>
  )
}

export default Navbar

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 50;
  transition: all 0.5s ease-in;
  @media only screen and (max-width:600px) {
    height: 100px;
  }
  .navContainer{
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    padding: 8px 12px;

    @media only screen and (max-width:600px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
    }

	.logo{
		width: 120px;
		cursor: pointer;
		img{
			width: 100%;
		}
	}
	.navSearch{
		display: flex;
		align-items: center;
		padding: 0 20px;

		@media only screen and (max-width:600px) {
			padding-left: 0;
			padding-right: 20px;
    	}
		.iconSearch{
			color: var(--color-white);
			font-size: 20px;
			filter: brightness(0.8);
			cursor: pointer;
			transform: translateX(26px);
		}

		&:hover .iconSearch{
			filter: brightness(1.2);
		}

		input{
			outline: none;
			color: var(--color-white);
			width: 0;
			cursor: pointer;
			border: 1px solid #fff;
			background-color: transparent;
			font-size: 14px;
			cursor: pointer;
			opacity: 0;
			padding: 10px;
			transition: width 0.3s linear;
			&:focus{
				padding-left: 26px;
				width: 300px;
				cursor: text;
				opacity: 1;
				border-radius: 4px;
			}
		}
	}
  }
`