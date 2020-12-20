import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { GlobalConsumer } from '../assets/context/Context'
import Hero from '../components/Hero'
import Sliders from '../components/Sliders'
import { API } from '../services/Service'

const Home = props => {
  const { getDiscover } = props;
  const [ movie, setMovie ] = useState(false);
  const [ drama, setDrama ] = useState(false);
  const [ movieSelected ] = useState(API.getDiscoverStreaming);
  const [ dramaSelected ] = useState(API.getMovieDrama);

  const getMovies = useCallback(() => {
    getDiscover(movieSelected).then(res => setMovie(res))
    getDiscover(dramaSelected).then(res => setDrama(res))
  },[movieSelected, dramaSelected, getDiscover])

  useEffect(() => getMovies(),[getMovies])

  const handleMovieSelected = (e) => {
    getDiscover(e.target.value).then(res => setMovie(res))
  }

  const handleDramaSelected = (e) => {
    getDiscover(e.target.value).then(res => setDrama(res))
  }

  return (
    <HomeWrap>
      <Hero
        title="Welcome. Millions of movies, TV shows and people to discover. Explore now."
      />
      <section>
        <Sliders title="What's Popular" data={movie}>
          <div className="selector">
            <select value={movieSelected} onChange={handleMovieSelected}>
              <option value={API.getDiscoverStreaming}>Streaming</option>
              <option value={API.getDiscoverOnTv}>On TV</option>
              <option value={API.getDiscoverForRent}>For Rent</option>
              <option value={API.getDiscoverInTheaters}>In Theaters</option>
            </select>
          </div>
        </Sliders>
        <Sliders title="Best Drama" data={drama}>
          <div className="selector">
            <select value={dramaSelected}  onChange={handleDramaSelected}>
              <option value={API.getMovieDrama}>Movie</option>
              <option value={API.getTvDrama}>On TV</option>
            </select>
          </div>
        </Sliders>
      </section>
    </HomeWrap>
  );
};

export default GlobalConsumer(Home);

const HomeWrap = styled.main`
  background: #000000;
  section{
    background: #22211F;
    margin: -140px auto 0 auto;
    max-width: 1140px;
    @media (max-width: 1140px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
`;