import React from 'react'
import styled from 'styled-components'
import BgHero from '../assets/images/bg-hero.jpg'

export default function Hero({bg, title}){
  return (
    <HeroWrap bg={bg}>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
        </div>
      </div>
    </HeroWrap>
  )
}

Hero.defaultProps = {
  bg: BgHero,
  title: 'Welcome Millions of movies, TV shows and people to discover. Explore now.'
}

const HeroWrap = styled.div`
  background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 20%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.75) 75%), url('${props => props.bg}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  .hero{
    z-index: 0;
    margin: 2rem;
    .hero-content{
      max-width: 540px;
      height: auto;
      .hero-title{
        color: #ffffff;
        font-size: 2em;
        text-align: center;
        line-height: 1.5;
        @media (max-width: 767px) {
          font-size: 1.25em;
        }
      }
    }
  }
`;