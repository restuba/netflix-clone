import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { GlobalConsumer } from '../assets/context/Context';
import Cards from '../components/Cards';
import GenreList from '../components/filter/GenreList';
import Hero from '../components/Hero';
import SortBy from '../components/filter/SortBy';
import Pagination from '../components/Pagination';
import { useHistory } from 'react-router-dom';

const Content = props => {
  const { getMovies, getGenreList, submitFilter } = props;
  const { genreList, dataContent } = props.state;
  const [ type, setStype ] = useState(props.type);
  const [ sortby, setSortby ] = useState('popularity.desc');
  const [ genre, setGenre ] = useState(false);
  const [ state, setState ] = useState({
    tempType: props.base,
    tempGenre: [],
    tempSortby: 'popularity.desc',
    subtitle: props.subtitle
  })
  const history = useHistory();

  useEffect(() => {
    if(props.type) getMovies(props.type);
  },[props.type, getMovies])

  useEffect(() => {
    if(props.type) getGenreList(`genre/${props.base}/list`);
  },[props.type, props.base, getGenreList])

  const handleSubmitFilter = () => {
    setGenre(state.tempGenre);
    setSortby(state.tempSortby);
    setStype(state.tempType);
    submitFilter(state.tempType, state.tempSortby, state.tempGenre, 1)
  }

  const handleSortby = e => setState({
    ...state,
    tempSortby: e.target.value
  });

  const handleGenre = e => {
    const target = e.target;
    const id = target.id;
    if(target.checked){
      state.tempGenre.push(id);
    }else{
      const index = state.tempGenre.indexOf(id);
      if(index > -1) state.tempGenre.splice(index, 1);
    }
  }

  const goDetails = (id) => history.push({
    pathname: `/${props.base}/${id}`,
    state: {
      id: id,
      base: props.base
    }
  })

  return (
    <MovieWrap>
      <Hero title={props.subtitle}/>
      <section>
        <div className="movies">
          <aside className="movies-sidemenu">
            <h2 className="title-sidemenu">Now Playing Movies</h2>
            <SortBy onChange={handleSortby}/>
            <GenreList data={genreList} onChange={handleGenre}/>
            <button className="submit-filter" onClick={() => handleSubmitFilter()}>Filter</button>
          </aside>
          <div className="movies-content">
            <h2 className="title-content">Result Movies</h2>
            <Cards data={dataContent} onClick={(id) => goDetails(id)} />
            <Pagination type={type} sortby={sortby} genre={genre} />
          </div>
        </div>
      </section>
    </MovieWrap>
  )
}

export default GlobalConsumer(Content);

const MovieWrap = styled.main`
  background: #000000;
  height: 100%;
  section{
    margin: -140px auto 140px auto;
    max-width: 1140px;
    @media (max-width: 1140px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
  .movies{
    display: grid;
    grid-template-columns: 25% auto;
    gap: 1rem;
    @media (max-width: 767px) {
      grid-template-columns: 100%;
    }
    .movies-sidemenu{
      background: #22211F;
      border: 1px solid #393534;
      padding: 1rem 1.5rem;
      .title-sidemenu{
        color: #ffffff;
      }
      .sort{
        .title-sort{
          color: #F4F4F4;
          font-weight: 400;
          margin: 0.5rem 0;
        }
        select{
          background: #393534;
          display: block;
          padding: 12px 16px;
          outline: none;
          color: #ffffff;
          position: relative;
          width: 100%;
        }
      }
      .submit-filter{
        margin-top: 2rem;
        padding: 12px 16px;
        background: #e50914;
        border: none;
        color: #ffffff;
        text-decoration: none;
        width: 100%;
      }
    }
    .movies-content{
      background: #22211F;
      border: 1px solid #393534;
      padding: 1rem 1.5rem;
      .title-content{
        color: #ffffff;
      }      
    }
  }
`;